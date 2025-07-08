import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('portfolios')
export class PortfoliosController {
  constructor(private readonly portfoliosService: PortfoliosService) {}

  @Post()
  create(@Request() req, @Body() createPortfolioDto: CreatePortfolioDto) {
    return this.portfoliosService.create(createPortfolioDto, req.user);
  }

  @Get()
  findAll(@Request() req) {
    return this.portfoliosService.findAll(req.user);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.portfoliosService.findOne(id, req.user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Request() req, @Body() updatePortfolioDto: UpdatePortfolioDto) {
    return this.portfoliosService.update(id, updatePortfolioDto, req.user);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.portfoliosService.remove(id, req.user);
  }
}
