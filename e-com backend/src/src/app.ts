import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import roleRoutes from './routes/role.routes';
import userRoutes from './routes/user.route';
import productRoutes from './routes/product.routes';
import orderRoutes from './routes/order.routes';
import { AppDataSource } from './config/ormconfig';

dotenv.config();
AppDataSource.initialize();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (_, res) => res.send('API Running'));

export default app;
