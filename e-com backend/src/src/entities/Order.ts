// src/modules/order/order.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from './User';
import { Product } from './Product';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: string;

  @ManyToOne(() => User, (user) => user.orders)
  user!: User;

  @ManyToOne(() => Product)
  product!: Product;

  @Column()
  quantity!: number;

  @Column({ type: 'decimal' })
  totalPrice!: number;

  @Column({ default: 'pending' }) // pending, shipped, delivered
  status!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
