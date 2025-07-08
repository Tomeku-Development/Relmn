import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../database/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(walletAddress: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { walletAddress } });
  }

  async findOrCreate(walletAddress: string): Promise<User> {
    let user = await this.findOne(walletAddress);
    if (!user) {
      user = this.usersRepository.create({ walletAddress });
      await this.usersRepository.save(user);
    }
    return user;
  }
}
