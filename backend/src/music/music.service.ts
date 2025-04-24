import { Injectable } from '@nestjs/common'
import { Tone } from '@prisma/client'

import { PrismaService } from 'src/prisma/prisma.service'
import { CreateMusicDto } from './dto/create-music.dto'

@Injectable()
export class MusicService {
  constructor(private prisma: PrismaService) {}

  async getMinistryMusics(ministryId: number) {
    return this.prisma.music.findMany({
      where: {
        ministryId: ministryId,
      },
      include: {
        singer: true,
      },
    })
  }

  async getMinistryMusicsBySinger(ministryId: number, singerId: number) {
    return this.prisma.music.findMany({
      where: {
        ministryId: ministryId,
        singerId: singerId,
      },
    })
  }

  async createMusic(music: CreateMusicDto) {
    return this.prisma.music.create({
      data: {
        artist: music.artist,
        date: music.date,
        name: music.name,
        tone: music.tone as Tone,
        singer: {
          connectOrCreate: {
            where: {
              id: music.singerId ?? 0,
            },
            create: {
              ministryId: music.ministryId,
              name: music.singer,
            },
          },
        },
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

  async deleteMusic(musicId: number) {
    return this.prisma.music.delete({
      where: { id: musicId },
    })
  }
}
