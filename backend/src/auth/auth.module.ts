import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserService } from 'src/user/user.service'
import { GoogleStrategy } from './strategies/google.strategy'
import { ConfigModule } from '@nestjs/config'
import googleOauth from './config/google-oauth.config'
import refreshJwtConfig from './config/refresh-jwt.config'
import { JwtModule } from '@nestjs/jwt'
import jwtConfig from './config/jwt.config'

@Module({
  imports: [
    JwtModule.registerAsync(jwtConfig.asProvider()),
    ConfigModule.forFeature(googleOauth),
    ConfigModule.forFeature(refreshJwtConfig),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, GoogleStrategy],
})
export class AuthModule {}
