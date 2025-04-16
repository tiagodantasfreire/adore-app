import { Module } from '@nestjs/common'
import { MusicService } from './music.service'
import { MusicController } from './music.controller'
import { UserService } from 'src/user/user.service'
@Module({
  controllers: [MusicController],
  providers: [MusicService, UserService],
})
export class MusicModule {}
