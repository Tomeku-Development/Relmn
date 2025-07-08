import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { UserSetting } from './user-setting.entity';
import { Portfolio } from './portfolio.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index({ unique: true })
  @Column({ unique: true, nullable: true })
  username: string;

  @Index({ unique: true })
  @Column()
  walletAddress: string;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => UserSetting, (settings) => settings.user, { cascade: true, eager: true })
  settings: UserSetting;

  @OneToMany(() => Portfolio, (portfolio) => portfolio.user, { cascade: true })
  portfolios: Portfolio[];
}
