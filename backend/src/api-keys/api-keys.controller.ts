import { Controller, Post, Body } from '@nestjs/common';
import { ApiKeysService } from './api-keys.service';
import { CreateApiKeyDto } from './dto/create-api-key.dto';

@Controller('api-keys')
export class ApiKeysController {
  constructor(private readonly apiKeysService: ApiKeysService) {}

  // In a real application, this endpoint should be protected and only accessible to admins.
  @Post()
  async create(@Body() createApiKeyDto: CreateApiKeyDto) {
    return this.apiKeysService.create(createApiKeyDto.description);
  }
}
