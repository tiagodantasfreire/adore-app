import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { UsersModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { MinistryModule } from './ministry/ministry.module'
import { MusicModule } from './music/music.module'
import { SingerModule } from './singer/singer.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    UsersModule,
    AuthModule,
    PrismaModule,
    MinistryModule,
    MusicModule,
    SingerModule,
  ],
})
export class AppModule {}
