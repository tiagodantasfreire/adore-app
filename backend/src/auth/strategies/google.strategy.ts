import { Inject, Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Profile, Strategy } from 'passport-google-oauth20'
import googleOauth from '../config/google-oauth.config'
import { ConfigType } from '@nestjs/config'
import { AuthService } from '../auth.service'

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(googleOauth.KEY)
    private googleConfiguration: ConfigType<typeof googleOauth>,
    private authService: AuthService,
  ) {
    super({
      clientID: googleConfiguration.clientID ?? '',
      clientSecret: googleConfiguration.clientSecret ?? '',
      callbackURL: googleConfiguration.callbackURL,
      scope: ['email', 'profile'],
    })
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const user = await this.authService.validateGoogleUser({
      email: profile.emails?.[0].value ?? '',
      firstName: profile.name?.givenName ?? '',
      lastName: profile.name?.familyName ?? '',
      avatarUrl: profile.photos?.[0].value,
      password: '',
      id: 5,
    })

    return user
  }
}
