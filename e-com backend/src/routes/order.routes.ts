import { Router } from 'express';
import { OrderController } from '../controllers/order.controller';
import { OrderService } from '../services/order.service';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();
const orderService = new OrderService();
const orderController = new OrderController(orderService);

router.post('/', authenticate, orderController.createOrder);
router.get('/', authenticate, orderController.getUserOrders);
router.patch('/:id/status', authenticate, orderController.updateOrderStatus);

export default router;