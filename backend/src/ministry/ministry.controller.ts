import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'

import { MinistryService } from './ministry.service'
import { RequireAuthHeaderGuard } from 'src/guards/require-auth-header.guard'
import { CreateMinistryDto } from './dto/create-ministry.dto'
import { GetUser } from 'src/auth/decorators/get-user.decorator'
import { MinistryNotFoundException } from 'src/exceptions/ministry-not-found.exception'
import { MinistryAccessCodeNotValidException } from 'src/exceptions/ministry-access-code-not-valid.exception'
import { GetMinistryId } from 'src/decorators/ministry-id.decorator'

@Controller('/ministry')
@UseGuards(RequireAuthHeaderGuard)
export class MinistryController {
  constructor(private readonly ministryService: MinistryService) {}

  @Post()
  async createMinistry(
    @Body() body: CreateMinistryDto,
    @GetUser('id') userId: number,
  ) {
    const ministryName = body.name

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

    return createdMinistry
  }

  @Get('/:ministryId')
  async getMinistryById(@GetMinistryId() ministryId: number) {
    const ministry = await this.ministryService.getById(ministryId)

    if (!ministry) {
      throw new MinistryNotFoundException()
    }

    return ministry
  }

  @Post('/:accessCode/join')
  async joinMinistry(
    @Param('accessCode') accessCode: string,
    @GetUser('id') userId: number,
  ) {
    const ministryWithAccessCode =
      await this.ministryService.getByAccessCode(accessCode)

    if (!ministryWithAccessCode) {
      throw new MinistryAccessCodeNotValidException()
    }

    const ministry = await this.ministryService.join({
      ministryId: ministryWithAccessCode.id,
      userId: userId,
    })

    return ministry
  }

  @Post('/:ministryId/exit')
  async exitMinistry(
    @GetMinistryId() ministryId: number,
    @GetUser('id') userId: number,
  ) {
    const ministry = await this.ministryService.exit({
      ministryId,
      userId,
    })

    return ministry
  }
}
