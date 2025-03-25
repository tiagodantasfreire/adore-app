import { IsEmail, IsOptional, IsString, IsUrl, IsNumber } from 'class-validator'

export class CreateUserDto {
  @IsNumber()
  id: number

  @IsString()
  firstName: string

  @IsString()
  lastName: string

  @IsString()
  @IsEmail()
  email: string

  @IsString()
  @IsUrl()
  @IsOptional()
  avatarUrl?: string

  @IsString()
  password: string
}
