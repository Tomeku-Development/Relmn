import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Portfolio } from '../database/entities/portfolio.entity';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { User } from '../database/entities/user.entity';

@Injectable()
export class PortfoliosService {
  constructor(
    @InjectRepository(Portfolio)
    private portfoliosRepository: Repository<Portfolio>,
  ) {}

  async create(createPortfolioDto: CreatePortfolioDto, user: User): Promise<Portfolio> {
    const portfolio = this.portfoliosRepository.create({
      ...createPortfolioDto,
      user,
    });
    return this.portfoliosRepository.save(portfolio);
  }

  async findAll(user: User): Promise<Portfolio[]> {
    return this.portfoliosRepository.find({ where: { user: { id: user.id } } });
  }

  async findOne(id: string, user: User): Promise<Portfolio> {
    const portfolio = await this.portfoliosRepository.findOne({ where: { id, user: { id: user.id } } });
    if (!portfolio) {
      throw new NotFoundException(`Portfolio with ID "${id}" not found`);
    }
    return portfolio;
  }

  async update(id: string, updatePortfolioDto: UpdatePortfolioDto, user: User): Promise<Portfolio> {
    const portfolio = await this.findOne(id, user); // Ensures ownership
    const updatedPortfolio = Object.assign(portfolio, updatePortfolioDto);
    return this.portfoliosRepository.save(updatedPortfolio);
  }

  async remove(id: string, user: User): Promise<void> {
    const portfolio = await this.findOne(id, user); // Ensures ownership
    await this.portfoliosRepository.remove(portfolio);
  }
}
