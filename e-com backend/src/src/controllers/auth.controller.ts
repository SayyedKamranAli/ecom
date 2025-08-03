import { Request, Response } from 'express';
import { User } from '../entities/User';
import { Role } from '../entities/Roles';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utills/generateToken';

export const register = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  // Role fetch karo (assumption: role string jaise "superadmin", "user", etc.)
  const roleEntity = await Role.findOne({ where: { name: role } });

  if (!roleEntity) {
    return res.status(400).json({ message: `Role '${role}' not found` });
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = hashedPassword;
  user.roles = [roleEntity];

  await user.save();

  const token = generateToken({ id: user.id, roles: user.roles.map((r) => r.name) });

  res.status(201).json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      roles: user.roles.map((r) => r.name),
    },
  });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: { email },
    relations: ['roles'],
  });

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = generateToken({ id: user.id, roles: user.roles.map((r) => r.name) });

  res.status(200).json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      roles: user.roles.map((r) => r.name),
    },
  });
};
