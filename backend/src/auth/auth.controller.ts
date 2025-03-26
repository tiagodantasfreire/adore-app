import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { GoogleAuthGuard } from './guards/google-auth.guards'
import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'

interface AuthenticatedRequest extends Request {
  user: { id: number }
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('me')
  getProfile(@Req() req: Request, @Res() res: Response) {
    const authHeader = req.headers['authorization']

    if (!authHeader) {
      throw new Error('Authorization header missing')
    }

    const token = authHeader.split(' ')[1]

    if (!token) {
      throw new Error('Token missing from Authorization header')
    }

    const user = jwt.verify(token, process.env.JWT_SECRET ?? '') // Verify token

    return res.json(user)
  }

  @UseGuards(GoogleAuthGuard)
  @Get('/google/login')
  googleLogin() {}

  @UseGuards(GoogleAuthGuard)
  @Get('google/callback')
  googleCallback(@Req() req: AuthenticatedRequest, @Res() res: Response) {
    const user = req.user

    const token = jwt.sign(user, process.env.JWT_SECRET ?? '', {
      expiresIn: '7d',
    })

    res.cookie('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookie in production
      sameSite: 'strict', // Prevent CSRF attacks
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })

    res.redirect(`http://localhost:8080/`)
  }
}
