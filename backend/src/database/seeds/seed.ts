import 'dotenv/config';
import { DataSource } from 'typeorm';
import { dataSourceOptions } from '../../../typeorm.config';
import { User } from '../entities/user.entity';
import { Portfolio } from '../entities/portfolio.entity';
import { Transaction, TransactionType, TransactionStatus } from '../entities/transaction.entity';

const AppDataSource = new DataSource({
  ...dataSourceOptions,
  entities: [User, Portfolio, Transaction],
});

const runSeed = async () => {
  await AppDataSource.initialize();
  console.log('Seeding database...');

  // Get repositories
  const userRepository = AppDataSource.getRepository(User);
  const portfolioRepository = AppDataSource.getRepository(Portfolio);
  const transactionRepository = AppDataSource.getRepository(Transaction);

  // Clean up existing data in the correct order to avoid foreign key constraint errors
  await AppDataSource.query('DELETE FROM "transactions"');
  await AppDataSource.query('DELETE FROM "portfolios"');
  await AppDataSource.query('DELETE FROM "users"');

  // Create a user
  const user = userRepository.create({
    walletAddress: '0x1234567890123456789012345678901234567890',
  });
  await userRepository.save(user);

  // Create a portfolio for the user
  const portfolio = portfolioRepository.create({
    name: 'My First Portfolio',
    description: 'A collection of my favorite assets.',
    user: user,
  });
  await portfolioRepository.save(portfolio);

  // Create a transaction for the portfolio
  const transaction = transactionRepository.create({
    portfolio: portfolio,
    type: TransactionType.DEPOSIT,
    assetIn: 'ETH',
    amountIn: 1.5,
    status: TransactionStatus.COMPLETED,
    hash: `0x${[...Array(64)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`,
  });
  await transactionRepository.save(transaction);

  console.log('Seeding completed successfully.');
  await AppDataSource.destroy();
};

runSeed().catch((error) => console.error('Seeding failed:', error));
