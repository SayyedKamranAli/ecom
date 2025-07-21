// src/config/ormconfig.ts

import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import dotenv from 'dotenv';
import { Product } from '../entities/Product';
import { Order } from '../entities/Order';

dotenv.config();
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASS, // This must be a string!
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User, Product, Order],
});
