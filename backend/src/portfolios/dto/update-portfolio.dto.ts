import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdatePortfolioDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;
}
