import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { OkxService } from './okx.service';

@ApiTags('OKX DEX')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('okx')
export class OkxController {
  constructor(private readonly okxService: OkxService) {}

  @Get('chains')
  getSupportedChains() {
    return this.okxService.getSupportedChains();
  }
}
