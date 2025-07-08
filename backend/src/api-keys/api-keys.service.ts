import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiKey } from '../database/entities/api-key.entity';
import * as crypto from 'crypto';

@Injectable()
export class ApiKeysService {
  constructor(
    @InjectRepository(ApiKey)
    private readonly apiKeyRepository: Repository<ApiKey>,
  ) {}

  async create(description: string): Promise<ApiKey> {
    // In production, you should hash the key before saving it
    // and only return the raw key to the user once.
    const key = crypto.randomBytes(32).toString('hex');
    const apiKey = this.apiKeyRepository.create({ key, description });
    return this.apiKeyRepository.save(apiKey);
  }

  async validate(key: string): Promise<ApiKey | null> {
    const apiKey = await this.apiKeyRepository.findOneBy({ key });

    if (!apiKey || !apiKey.isActive) {
      return null;
    }

    // Update last used timestamp asynchronously
    this.apiKeyRepository.update(apiKey.id, { lastUsedAt: new Date() });

    return apiKey;
  }
}
