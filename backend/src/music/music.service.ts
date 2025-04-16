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

  async createMusic(musicData: CreateMusicDto) {
    return this.prisma.music.create({
      data: {
        artist: musicData.artist,
        date: musicData.date,
        name: musicData.name,
        singer: musicData.singer,
        tone: musicData.tone as Tone,
        createdBy: {
          connect: {
            id: musicData.userId,
          },
        },
        ministry: {
          connect: {
            id: musicData.ministryId,
          },
        },
      },
    })
  }
}
