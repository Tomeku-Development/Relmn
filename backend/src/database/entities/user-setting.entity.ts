import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

export enum Theme { 
  LIGHT = 'light',
  DARK = 'dark',
}

@Entity('user_settings')
export class UserSetting {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 'USD' })
  preferredCurrency: string;

  @Column({
    type: 'enum',
    enum: Theme,
    default: Theme.DARK,
  })
  theme: Theme;

  @OneToOne(() => User, (user) => user.settings)
  @JoinColumn()
  user: User;
}
