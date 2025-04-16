import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common'
import { Response } from 'express'
import { User } from '@prisma/client'

import { MinistryService } from './ministry.service'
import { RequireAuthHeaderGuard } from 'src/guards/require-auth-header.guard'
import { CreateMinistryDto } from './dto/create-ministry.dto'
import { GetUser } from 'src/auth/decorators/get-user.decorator'

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

    res.json(createdMinistry)
  }

  @Get()
  async getMinistries(@Query('ministryName') ministryName?: string) {
    if (ministryName) {
      const ministries = await this.ministryService.getByName(ministryName)
      return ministries
    }

    const ministries = await this.ministryService.getAll()

    return ministries
  }

  @Get('/:id')
  async getMinistryById(@Param('id') id: string) {
    const ministry = await this.ministryService.getById(id)

    if (!ministry) {
      throw new Error('Ministry not found')
    }

    return ministry
  }

  @Post('/:id/join')
  async joinMinistry(
    @Param('id') id: string,
    @GetUser() user: User,
    @Res() res: Response,
  ) {
    const userId = user.id

    if (!userId) {
      throw new Error('User id is missing')
    }

    const ministry = await this.ministryService.join({
      ministryId: id,
      userId: userId,
    })

    res.json(ministry)
  }

  @Post('/:id/exit')
  async exitMinistry(
    @Param('id') id: string,
    @GetUser() user: User,
    @Res() res: Response,
  ) {
    const userId = user.id

    if (!userId) {
      throw new Error('User id is missing')
    }

    const ministry = await this.ministryService.exit({
      ministryId: id,
      userId: userId,
    })

    res.json(ministry)
  }
}
