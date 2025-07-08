import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { ApiKeysService } from './api-keys.service';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(HeaderAPIKeyStrategy, 'api-key') {
  constructor(private readonly apiKeysService: ApiKeysService) {
    super({ header: 'X-Api-Key', prefix: '' }, false);
  }

  async validate(apiKey: string): Promise<any> {
    const validApiKey = await this.apiKeysService.validate(apiKey);
    if (!validApiKey) {
      throw new UnauthorizedException('Invalid API Key');
    }
    return validApiKey;
  }
}
