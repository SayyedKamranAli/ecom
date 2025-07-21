import { AppDataSource } from '../config/ormconfig';
import { Order } from '../entities/Order';
import { Product } from '../entities/Product';
import { User } from '../entities/User';

export class OrderService {
  private orderRepository = AppDataSource.getRepository(Order);
  private productRepository = AppDataSource.getRepository(Product);
  private userRepository = AppDataSource.getRepository(User);

  async createOrder(userId: string, productId: string, quantity: number) {
    const user = await this.userRepository.findOneBy({ id: userId });
    const product = await this.productRepository.findOneBy({ id: productId });

    if (!user || !product) throw new Error('User or Product not found');

    const order = this.orderRepository.create({
      user,
      product,
      quantity,
      totalPrice: Number(product.price) * quantity,
    });

    return this.orderRepository.save(order);
  }

  async getUserOrders(userId: string) {
    return this.orderRepository.find({
      where: { user: { id: userId } },
      relations: ['product'],
    });
  }

  async updateOrderStatus(orderId: string, status: string) {
    const order = await this.orderRepository.findOneBy({ id: orderId });
    if (!order) throw new Error('Order not found');
    order.status = status;
    return this.orderRepository.save(order);
  }
}