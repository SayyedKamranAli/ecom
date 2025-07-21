import { Request, Response } from 'express';
import { User } from '../entities/User';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utills/generateToken';

export const register = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = User.create({ name, email, password: hashedPassword, role });
  await user.save();

  const token = generateToken({ id: user.id, role: user.role });

  res.status(201).json({ token, user: { id: user.id, name, email, role } });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOneBy({ email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

  const token = generateToken({ id: user.id, role: user.role });

  res.status(200).json({ token, user: { id: user.id, name: user.name, email, role: user.role } });
};
