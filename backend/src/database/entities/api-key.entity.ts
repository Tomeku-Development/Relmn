import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Index } from 'typeorm';

@Entity('api_keys')
export class ApiKey {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index({ unique: true })
  @Column()
  key: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  lastUsedAt: Date;

  @Column({ default: true })
  isActive: boolean;
}
