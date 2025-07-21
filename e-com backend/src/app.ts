import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import productRoutes from './routes/product.routes';
import orderRoutes from './routes/order.routes';
import { AppDataSource } from './config/ormconfig';

dotenv.config();
AppDataSource.initialize();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (_, res) => res.send('API Running'));

export default app;
