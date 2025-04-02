import { Module } from '@nestjs/common'
import { UsersModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module'
import { MinistryModule } from './ministry/ministry.module'

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
  ],
})
export class AppModule {}
