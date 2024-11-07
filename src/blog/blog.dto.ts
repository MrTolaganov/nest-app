import { IsNotEmpty, IsString } from 'class-validator'

export class BlogDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  except: string

  @IsString()
  @IsNotEmpty()
  decription: string
}
