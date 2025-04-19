import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Delete,
} from '@nestjs/common'

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
    @Body() musicData: Omit<CreateMusicDto, 'userId' | 'ministryId'>,
  ) {
    const createdMusic = await this.musicService.createMusic({
      ...musicData,
      userId,
      ministryId: id,
    })

    return createdMusic
  }

  @Delete('/:id')
  async deleteMusic(@Param('id') id: string) {
    await this.musicService.deleteMusic(id)
  }
}
