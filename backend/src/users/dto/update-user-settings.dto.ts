import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Theme } from '../../database/entities/user-setting.entity';

export class UpdateUserSettingsDto {
  @IsOptional()
  @IsString()
  preferredCurrency?: string;

  @IsOptional()
  @IsEnum(Theme)
  theme?: Theme;
}
