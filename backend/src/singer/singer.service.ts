import { Injectable } from '@nestjs/common'

import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class SingerService {
  constructor(private prisma: PrismaService) {}

  async getSingers(ministryId: string) {
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
}
