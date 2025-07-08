import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OkxService } from './okx.service';
import { OkxController } from './okx.controller';

@Module({
  imports: [
    ConfigModule,
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get<string>('OKX_API_BASE_URL'),
        headers: {
          'OK-ACCESS-KEY': configService.get<string>('OKX_API_KEY'),
          'Content-Type': 'application/json',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [OkxService],
  exports: [OkxService],
  controllers: [OkxController],
})
export class OkxModule {}
