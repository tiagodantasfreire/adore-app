import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Delete,
  Query,
} from '@nestjs/common'

import { MusicService } from './music.service'
import { CreateMusicDto } from './dto/create-music.dto'
import { RequireAuthHeaderGuard } from 'src/guards/require-auth-header.guard'
import { GetUser } from 'src/auth/decorators/get-user.decorator'

@Controller('/ministry/:ministryId/music')
@UseGuards(RequireAuthHeaderGuard)
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get()
  async getMinistryMusics(
    @Param('ministryId') ministryId: string,
    @Query('singerId') singerId?: string,
  ) {
    if (singerId) {
      return this.musicService.getMinistryMusicsBySinger(
        Number(ministryId),
        Number(singerId),
      )
    }

    return this.musicService.getMinistryMusics(Number(ministryId))
  }

  @Post()
  async createMusic(
    @GetUser('id') userId: number,
    @Param('ministryId') ministryId: string,
    @Body() musicData: Omit<CreateMusicDto, 'userId' | 'ministryId'>,
  ) {
    return this.musicService.createMusic({
      ...musicData,
      userId,
      ministryId: Number(ministryId),
    })
  }

  @Delete('/:musicId')
  async deleteMusic(@Param('musicId') musicId: string) {
    await this.musicService.deleteMusic(Number(musicId))
  }
}
