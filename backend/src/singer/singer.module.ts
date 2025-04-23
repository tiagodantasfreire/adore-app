import { Module } from '@nestjs/common'

import { SingerController } from './singer.controller'
import { SingerService } from './singer.service'

@Module({
  controllers: [SingerController],
  providers: [SingerService],
})
export class SingerModule {}
