import { IsNumber, IsString } from 'class-validator'

export class JoinMinistryDto {
  @IsString()
  ministryId: string

  @IsNumber()
  userId: number
}
