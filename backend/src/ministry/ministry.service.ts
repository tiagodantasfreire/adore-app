import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateMinistryDto } from './dto/create-ministry.dto'
import { JoinMinistryDto } from './dto/join-ministry.dto'

@Injectable()
export class MinistryService {
  private readonly logger = new Logger(MinistryService.name)
  constructor(private prisma: PrismaService) {}

  async create({ name, userId }: CreateMinistryDto) {
    try {
      const existingMinistry = await this.prisma.ministry.findFirst({
        where: { name },
      })

      if (existingMinistry) {
        throw new ConflictException('Já existe um ministério com esse nome')
      }

      return await this.prisma.ministry.create({
        data: {
          name,
          userId,
        },
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(
          `Erro ao criar ministério: ${error.message}`,
          error.stack,
        )

        if (error instanceof ConflictException) {
          throw error
        }
      }

      this.logger.error('Erro desconhecido ao criar ministério', error)

      throw new InternalServerErrorException(
        'Erro ao criar ministério. Tente novamente mais tarde.',
      )
    }
  }

  async getAll() {
    return this.prisma.ministry.findMany({
      include: {
        createdBy: {
          select: { firstName: true, lastName: true },
        },
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
}
