import { Injectable, Logger } from '@nestjs/common'

import { PrismaService } from 'src/prisma/prisma.service'
import { CreateMinistryDto } from './dto/create-ministry.dto'
import { JoinMinistryDto } from './dto/join-ministry.dto'
import { ExitMinistryDto } from './dto/exit-ministry.dto'

@Injectable()
export class MinistryService {
  private readonly logger = new Logger(MinistryService.name)
  constructor(private prisma: PrismaService) {}

  async create({ name, userId }: CreateMinistryDto) {
    let accessCode = this.generateAccessCode()

    const otherMinistryHasSameAccessCode = await this.prisma.ministry.findFirst(
      {
        where: {
          accessCode,
        },
      },
    )

    if (otherMinistryHasSameAccessCode) {
      accessCode = this.generateAccessCode()
    }

    return await this.prisma.ministry.create({
      data: {
        name,
        userId,
        accessCode,
        members: {
          connect: { id: userId },
        },
      },
    })
  }

  async getById(id: string) {
    return this.prisma.ministry.findUnique({
      where: { id },
      include: {
        createdBy: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      omit: {
        userId: true,
      },
    })
  }

  async join({ ministryId, userId }: JoinMinistryDto) {
    return this.prisma.ministry.update({
      where: { id: ministryId },
      data: {
        members: {
          connect: { id: userId },
        },
      },
    })
  }

  async exit({ ministryId, userId }: ExitMinistryDto) {
    return this.prisma.ministry.update({
      where: { id: ministryId },
      data: { members: { disconnect: { id: userId } } },
    })
  }

  generateAccessCode() {
    const accessCode = Math.random().toString(36).substring(2, 6)
    return accessCode
  }

  async getByAccessCode(accessCode: string) {
    return this.prisma.ministry.findUnique({
      where: { accessCode },
    })
  }
}
