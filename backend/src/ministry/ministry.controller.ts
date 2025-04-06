import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common'
import { CreateMinistryDto } from './dto/create-ministry.dto'
import { MinistryService } from './ministry.service'
import { Response } from 'express'
import { RequireAuthHeaderGuard } from 'src/guards/require-auth-header.guard'
import { UserService } from 'src/user/user.service'

@Controller('/ministry')
@UseGuards(RequireAuthHeaderGuard)
export class MinistryController {
  constructor(
    private readonly ministryService: MinistryService,
    private readonly userService: UserService,
  ) {}

  @Post()
  async createMinistry(@Body() body: CreateMinistryDto, @Res() res: Response) {
    const ministryName = body.name
    const userId = body.userId

    if (!userId) {
      throw new Error('User id is missing')
    }

    if (!ministryName) {
      throw new Error('Ministry name is missing')
    }

    const createdMinistry = await this.ministryService.create({
      name: ministryName,
      userId,
    })

    res.json(createdMinistry)
  }

  @Get()
  async getAllMinistries() {
    const ministries = await this.ministryService.getAll()

    return ministries
  }
}
