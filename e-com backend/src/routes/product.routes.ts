import express from 'express';
import { createProduct, getAllProducts } from '../controllers/product.controller';

const router = express.Router();

router.post('/create', createProduct);
router.get('/', getAllProducts);

export default router;
