import { Inject, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ConfigType } from '@nestjs/config'
// import { hash } from 'bcrypt'

import { CreateUserDto } from 'src/user/dto/create-user.dto'
import { UserService } from '../user/user.service'
import { AuthJwtPayload } from './types/auth-jwtPayload'
import refreshJwtConfig from './config/refresh-jwt.config'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    @Inject(refreshJwtConfig.KEY)
    private refreshTokenConfig: ConfigType<typeof refreshJwtConfig>,
  ) {}

  async login(userId: number) {
    const payload: AuthJwtPayload = { sub: userId }

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, this.refreshTokenConfig),
    ])

    // const hashedRefreshToken = await hash(refreshToken, 10)
    // await this.userService.updateHashedRefreshToken(userId, hashedRefreshToken)

    return {
      id: userId,
      accessToken,
      refreshToken,
    }
  }

  async validateGoogleUser(googleUser: CreateUserDto) {
    const user = await this.userService.findByEmail(googleUser.email)

    if (user) return user

    const createUser = await this.userService.create(googleUser)
    return createUser
  }
}
