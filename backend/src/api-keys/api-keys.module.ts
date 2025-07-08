import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { ApiKey } from '../database/entities/api-key.entity';
import { ApiKeysService } from './api-keys.service';
import { ApiKeyStrategy } from './api-key.strategy';
import { ApiKeysController } from './api-keys.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ApiKey]), PassportModule],
  providers: [ApiKeysService, ApiKeyStrategy],
  controllers: [ApiKeysController],
  exports: [ApiKeysService],
})
export class ApiKeysModule {}
