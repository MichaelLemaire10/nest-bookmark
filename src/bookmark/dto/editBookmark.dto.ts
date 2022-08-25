import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class EditBookmarkDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  link?: string;

  @IsString()
  @IsOptional()
  second_link?: string;

  @IsString()
  @IsOptional()
  third_link?: string;
}
