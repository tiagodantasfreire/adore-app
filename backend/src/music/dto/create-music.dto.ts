import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateMusicDto {
  @IsString()
  name: string

  @IsString()
  artist: string

  @IsString()
  singer: string

  @IsString()
  tone: string

  @IsDate()
  date: Date

  @IsString()
  @IsOptional()
  serviceName?: string

  @IsNumber()
  userId: number

  @IsString()
  ministryId: string
}
