import { Request, Response } from 'express';
import { OrderService } from '../services/order.service';

export class OrderController {
  constructor(private orderService: OrderService) {}

  createOrder = async (req: Request, res: Response) => {
    const userId = (req as any).user?.id;
    const { productId, quantity } = req.body;
    try {
      const newOrder = await this.orderService.createOrder(userId, productId, quantity);
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create order', error });
    }
  };

  getUserOrders = async (req: Request, res: Response) => {
    const userId = (req as any).user?.id;
    try {
      const orders = await this.orderService.getUserOrders(userId);
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: 'Failed to get orders', error });
    }
  };

  updateOrderStatus = async (req: Request, res: Response) => {
    const orderId = req.params.id;
    const { status } = req.body;
    try {
      const updated = await this.orderService.updateOrderStatus(orderId, status);
      res.status(200).json(updated);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update order status', error });
    }
  };
}
