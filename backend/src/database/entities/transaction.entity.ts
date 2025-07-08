import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Portfolio } from './portfolio.entity';

export enum TransactionType {
  SWAP = 'SWAP',
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAWAL',
}

export enum TransactionStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Portfolio)
  portfolio: Portfolio;

  @Column({ type: 'enum', enum: TransactionType })
  type: TransactionType;

  @Column()
  assetIn: string;

  @Column('decimal', { precision: 18, scale: 8 })
  amountIn: number;

  @Column({ nullable: true })
  assetOut: string;

  @Column('decimal', { precision: 18, scale: 8, nullable: true })
  amountOut: number;

  @Column({ type: 'enum', enum: TransactionStatus })
  status: TransactionStatus;

  @Column({ unique: true })
  hash: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
