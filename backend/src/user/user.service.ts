import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'

// This should be a real class/interface representing a user entity
export type User = any

@Injectable()
export class UserService {
  private readonly users: CreateUserDto[] = [
    {
      id: 1,
      email: '1@adore.com',
      firstName: 'One',
      lastName: 'Test',
      password: '',
    },
    {
      id: 2,
      email: '2@adore.com',
      firstName: 'Two',
      lastName: 'Test',
      password: '',
    },
  ]

  create(user: CreateUserDto) {
    this.users.push(user)

    return this.users.find((u) => u.email === user.email)
  }

  findByEmail(email: string) {
    return this.users.find((user) => user.email === email)
  }

  updateHashedRefreshToken(userId: number, hashedRefreshToken: string) {
    const currentUser = this.users.find((user) => user.id === userId)
    return currentUser
  }
}
