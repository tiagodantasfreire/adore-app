import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { GoogleAuthGuard } from './guards/google-auth.guard'
import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import { UserService } from 'src/user/user.service'
import { JwtUser } from './types/jwt-user'

interface AuthenticatedRequest extends Request {
  user: {
    id: number
    firstName: string
    lastName: string
  }
}

const jwtSecret = process.env.JWT_SECRET ?? ''

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Get('/me')
  async getProfile(@Req() req: Request, @Res() res: Response) {
    const authHeader = req.headers['authorization']

    if (!authHeader) {
      throw new Error('Authorization header missing')
    }

    const token = authHeader.split(' ')[1]

    if (!token) {
      throw new Error('Token missing from Authorization header')
    }

    const user = jwt.verify(token, jwtSecret) as JwtUser

    if (!user) {
      throw new Error('Invalid token')
    }

    const userData = await this.userService.findById(user.id)

    return res.json({
      ...user,
      ...userData,
    })
  }

  @UseGuards(GoogleAuthGuard)
  @Get('/google/login')
  googleLogin() {}

  @UseGuards(GoogleAuthGuard)
  @Get('/google/callback')
  googleCallback(@Req() req: AuthenticatedRequest, @Res() res: Response) {
    const user = req.user

    const token = jwt.sign(user, jwtSecret, {
      expiresIn: '7d',
    })

    res.redirect(`${process.env.WEB_URL}/api/auth/sign-in?token=${token}`)
  }
}
