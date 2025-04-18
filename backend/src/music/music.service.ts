import { Injectable } from '@nestjs/common'
import { Tone } from '@prisma/client'

import { PrismaService } from 'src/prisma/prisma.service'
import { CreateMusicDto } from './dto/create-music.dto'

@Injectable()
export class MusicService {
  constructor(private prisma: PrismaService) {}

  async getMinistryMusics(ministryId: string) {
    return this.prisma.music.findMany({
      where: {
        ministryId: ministryId,
      },
    })
  }

  async createMusic(music: CreateMusicDto) {
    return this.prisma.music.create({
      data: {
        artist: music.artist,
        date: music.date,
        name: music.name,
        singer: music.singer,
        tone: music.tone as Tone,
        createdBy: {
          connect: {
            id: music.userId,
          },
        },
        ministry: {
          connect: {
            id: music.ministryId,
          },
        },
      },
    })
  }

  async deleteMusic(musicId: string) {
    return this.prisma.music.delete({
      where: { id: musicId },
    })
  }
}
