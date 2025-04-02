import { Module } from '@nestjs/common'
import { MinistryController } from './ministry.controller'
import { MinistryService } from './ministry.service'
import { UserService } from 'src/user/user.service'

@Module({
  controllers: [MinistryController],
  providers: [MinistryService, UserService],
})
export class MinistryModule {}
