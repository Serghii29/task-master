/* eslint-disable no-console */
import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from '../entities/User';
import { Todo } from '../entities/Todo';

const options: DataSourceOptions = {
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT_DB),
  logging: ['query', 'error'],
  type: 'postgres',
  migrations: ['dist/migrations/**/*.{ts,js}'],
  subscribers: ['src/subscriber/**/*.ts'],
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  entities: [Todo, User],
  ssl: true,
  synchronize: true
};

export const AppSource = new DataSource(options);

const connectDB = async () => {
  try {
    await AppSource.initialize();
    console.log('PostgreSQL Connected...');
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
