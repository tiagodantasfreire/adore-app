import { IsNumber, IsString } from 'class-validator'

export class CreateMinistryDto {
  @IsString()
  name: string

  @IsNumber()
  userId: number
}
