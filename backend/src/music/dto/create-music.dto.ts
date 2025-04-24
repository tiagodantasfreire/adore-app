import { IsDate, IsNumber, IsString } from 'class-validator'

export class CreateMusicDto {
  @IsString()
  name: string

  @IsString()
  artist: string

  @IsNumber()
  singerId: number

  @IsString()
  singer: string

  @IsString()
  tone: string

  @IsDate()
  date: Date

  @IsNumber()
  userId: number

  @IsNumber()
  ministryId: number
}
