import { Request, Response } from 'express';
import { Product } from '../entities/Product';

export const createProduct = async (req: Request, res: Response) => {
    console.log('req', req)
  try {
    const { name, description, price, stock, image } = req.body;

    const product = Product.create({
      name,
      description,
      price,
      stock,
      image,
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
};

export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
};
