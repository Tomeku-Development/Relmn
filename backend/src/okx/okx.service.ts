import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OkxService {
  private readonly apiKey: string;
  private readonly apiSecret: string;
  private readonly apiPassphrase: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.apiKey = this.configService.get<string>('OKX_API_KEY');
    this.apiSecret = this.configService.get<string>('OKX_API_SECRET');
    this.apiPassphrase = this.configService.get<string>('OKX_API_PASSPHRASE');
  }

  private createSignature(timestamp: string, method: string, requestPath: string, body: string = ''): string {
    const message = timestamp + method.toUpperCase() + requestPath + body;
    const hmac = crypto.createHmac('sha256', this.apiSecret);
    return hmac.update(message).digest('base64');
  }

  async getSupportedChains(): Promise<any> {
    const timestamp = new Date().toISOString();
    const method = 'GET';
    const requestPath = '/api/v5/dex/aggregator/chains'; // Assuming this endpoint based on documentation patterns

    const signature = this.createSignature(timestamp, method, requestPath);

    const headers = {
      'OK-ACCESS-KEY': this.apiKey,
      'OK-ACCESS-SIGN': signature,
      'OK-ACCESS-TIMESTAMP': timestamp,
      'OK-ACCESS-PASSPHRASE': this.apiPassphrase,
      'Content-Type': 'application/json',
    };

    const { data } = await firstValueFrom(
      this.httpService.get(requestPath, { headers }),
    );
    return data;
  }
}
