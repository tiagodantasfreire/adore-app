import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { PrismaService } from 'src/prisma/prisma.service'

// This should be a real class/interface representing a user entity
export type User = any

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(user: CreateUserDto) {
    const createdUser = this.prisma.user.create({
      data: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        avatarUrl: user.avatarUrl,
      },
    })

    return createdUser
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } })
  }

  updateRefreshToken(userId: number, hashedRefreshToken: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: hashedRefreshToken },
    })
  }

  async findById(userId: number) {
    return this.prisma.user.findUnique({ where: { id: userId } })
  }
}
