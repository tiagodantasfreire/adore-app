import { IsNumber, IsString } from 'class-validator'

export class ExitMinistryDto {
  @IsString()
  ministryId: string

  @IsNumber()
  userId: number
}
