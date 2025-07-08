import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false, // Turn off for production and migrations
  ssl: {
    rejectUnauthorized: false, // Required for Supabase
  },
  poolSize: 10,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
