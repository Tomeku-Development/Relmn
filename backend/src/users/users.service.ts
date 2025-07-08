import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../database/entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserSetting } from '../database/entities/user-setting.entity';
import { UpdateUserSettingsDto } from './dto/update-user-settings.dto';
import { Portfolio } from '../database/entities/portfolio.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(UserSetting)
    private userSettingsRepository: Repository<UserSetting>,
  ) {}

  async findOne(walletAddress: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { walletAddress } });
  }

  async findById(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findOrCreate(walletAddress: string): Promise<User> {
    const user = await this.findOne(walletAddress);
    if (user) {
      return user;
    }

    // If the user doesn't exist, create a new user and their settings together.
    const newSettings = new UserSetting();
    const defaultPortfolio = new Portfolio();
    defaultPortfolio.name = 'Main Portfolio';
    defaultPortfolio.description = 'Default portfolio for tracking assets.';

    const newUser = this.usersRepository.create({
      walletAddress,
      settings: newSettings,
      portfolios: [defaultPortfolio],
    });

    // Thanks to `cascade: true` on the User entity's settings relation,
    // saving the user will also automatically save the associated settings.
    return this.usersRepository.save(newUser);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    // The 'preload' method safely loads the entity and applies the new values.
    // It returns undefined if the entity is not found.
    const user = await this.usersRepository.preload({
      id: id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return this.usersRepository.save(user);
  }

  async updateSettings(userId: string, updateUserSettingsDto: UpdateUserSettingsDto): Promise<UserSetting> {
    const user = await this.findById(userId);
    const settings = await this.userSettingsRepository.preload({
      id: user.settings.id,
      ...updateUserSettingsDto,
    });

    if (!settings) {
      throw new NotFoundException('User settings not found');
    }

    return this.userSettingsRepository.save(settings);
  }
}
