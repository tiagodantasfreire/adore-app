import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { GoogleAuthGuard } from './guards/google-auth.guards'
import { Request, Response } from 'express'

interface AuthenticatedRequest extends Request {
  user: { id: number }
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(GoogleAuthGuard)
  @Get('/google/login')
  googleLogin() {}

  @UseGuards(GoogleAuthGuard)
  @Get('google/callback')
  async googleCallback(@Req() req: AuthenticatedRequest, @Res() res: Response) {
    const response = await this.authService.login(req.user?.id)
    res.redirect(`http://localhost:8080/?token=${response.accessToken}`)
  }
}
