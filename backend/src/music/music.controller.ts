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
import { GetMinistryId } from 'src/decorators/ministry-id.decorator'

@Controller('/ministry/:ministryId/music')
@UseGuards(RequireAuthHeaderGuard)
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get()
  async getMinistryMusics(
    @GetMinistryId() ministryId: number,
    @Query('singerId') singerId?: string,
  ) {
    if (singerId) {
      return this.musicService.getMinistryMusicsBySinger(
        ministryId,
        Number(singerId),
      )
    }

    return this.musicService.getMinistryMusics(ministryId)
  }

  @Post()
  async createMusic(
    @GetUser('id') userId: number,
    @GetMinistryId() ministryId: number,
    @Body() musicData: Omit<CreateMusicDto, 'userId' | 'ministryId'>,
  ) {
    return this.musicService.createMusic({
      ...musicData,
      userId,
      ministryId,
    })
  }

  @Delete('/:musicId')
  async deleteMusic(@Param('musicId') musicId: string) {
    await this.musicService.deleteMusic(Number(musicId))
  }
}
