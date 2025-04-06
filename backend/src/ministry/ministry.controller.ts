import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common'
import { CreateMinistryDto } from './dto/create-ministry.dto'
import { MinistryService } from './ministry.service'
import { Response } from 'express'
import { RequireAuthHeaderGuard } from 'src/guards/require-auth-header.guard'

@Controller('/ministry')
@UseGuards(RequireAuthHeaderGuard)
export class MinistryController {
  constructor(private readonly ministryService: MinistryService) {}

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

    console.log(createdMinistry)

    res.json(createdMinistry)
  }

  @Get()
  async getAllMinistries() {
    return await this.ministryService.getAll()
  }
}
