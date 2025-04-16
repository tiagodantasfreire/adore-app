import { Controller, Post, Body, UseGuards, Get, Param } from '@nestjs/common'

import { MusicService } from './music.service'
import { CreateMusicDto } from './dto/create-music.dto'
import { RequireAuthHeaderGuard } from 'src/guards/require-auth-header.guard'
import { GetUser } from 'src/auth/decorators/get-user.decorator'
import { UserService } from 'src/user/user.service'

@Controller('/music')
@UseGuards(RequireAuthHeaderGuard)
export class MusicController {
  constructor(
    private readonly musicService: MusicService,
    private readonly userService: UserService,
  ) {}

  @Get('/:id')
  async getMinistryMusics(@Param('id') id: string) {
    const music = await this.musicService.getMinistryMusics(id)

    return music
  }

  @Post('/:id')
  async createMusic(
    @GetUser('id') userId: number,
    @Param('id') id: string,
    @Body() musicData: CreateMusicDto,
  ) {
    const createdMusic = await this.musicService.createMusic({
      artist: musicData.artist,
      date: musicData.date,
      ministryId: id,
      name: musicData.name,
      singer: musicData.singer,
      tone: musicData.tone,
      userId,
    })

    console.log(createdMusic)

    return createdMusic
  }
}
