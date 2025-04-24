import { IsNumber } from 'class-validator'

export class JoinMinistryDto {
  @IsNumber()
  ministryId: number

  @IsNumber()
  userId: number
}
