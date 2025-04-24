import { Controller, Get, Param, UseGuards } from '@nestjs/common'

import { RequireAuthHeaderGuard } from 'src/guards/require-auth-header.guard'
import { SingerService } from './singer.service'
import { GetMinistryId } from 'src/decorators/ministry-id.decorator'

@Controller('/ministry/:ministryId/singers')
@UseGuards(RequireAuthHeaderGuard)
export class SingerController {
  constructor(private readonly singerService: SingerService) {}

  @Get('/')
  async getSingers(@GetMinistryId() ministryId: number) {
    const singers = await this.singerService.getSingers(ministryId)
    return singers
  }

  @Get('/:singerId')
  async getSinger(@Param('singerId') singerId: string) {
    const singer = await this.singerService.getSinger(Number(singerId))
    return singer
  }
}
