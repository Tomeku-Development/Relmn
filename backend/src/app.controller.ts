import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiKeyAuthGuard } from './api-keys/api-key.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(ApiKeyAuthGuard)
  @Get('protected')
  getProtectedResource() {
    return { message: 'This is a protected resource, accessible only with a valid API key.' };
  }
}
