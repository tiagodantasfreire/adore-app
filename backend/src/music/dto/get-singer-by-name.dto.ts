import { IsString } from 'class-validator'

export class GetSingerByNameDto {
  @IsString()
  name: string

  @IsString()
  ministryId: string
}
