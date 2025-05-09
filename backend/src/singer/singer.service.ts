import { Injectable } from '@nestjs/common'

import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class SingerService {
  constructor(private prisma: PrismaService) {}

  async getSingers(ministryId: number) {
    return this.prisma.singer.findMany({
      where: {
        ministryId: ministryId,
      },
      orderBy: {
        name: 'asc',
      },
      distinct: ['id'],
      include: {
        _count: {
          select: { musics: true },
        },
      },
    })
  }

  async getSinger(singerId: number) {
    return this.prisma.singer.findUnique({
      where: { id: singerId },
    })
  }

  async getSingerMusics(singerId: number) {
    return this.prisma.music.findMany({
      where: { singerId },
    })
  }
}
