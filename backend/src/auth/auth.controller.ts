import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { GoogleAuthGuard } from './guards/google-auth.guards'
import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'

interface AuthenticatedRequest extends Request {
  user: {
    id: number
    firstName: string
    lastName: string
  }
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
  async googleCallback(@Req() req: AuthenticatedRequest, @Res() res: Response) {
    const { id, firstName, lastName } = req.user

    const { accessToken, refreshToken } = await this.authService.login({
      firstName,
      lastName,
      userId: id,
    })

    res.redirect(
      `http://localhost:8080/api/auth/google/callback?accessToken=${accessToken}&refreshToken=${refreshToken}&userId=${id}&firstName=${firstName}&lastName=${lastName}`,
    )
  }
}
