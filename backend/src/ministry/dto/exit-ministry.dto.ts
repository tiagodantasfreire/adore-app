import { IsNumber } from 'class-validator'

export class ExitMinistryDto {
  @IsNumber()
  ministryId: number

  @IsNumber()
  userId: number
}
