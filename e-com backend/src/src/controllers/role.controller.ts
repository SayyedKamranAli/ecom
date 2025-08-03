import { Request, Response } from 'express';
import { createRole, getAllRoles } from '../services/role.service';

export const createRoleController = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const role = await createRole(name);
    res.status(201).json(role);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getRolesController = async (_: Request, res: Response) => {
  try {
    const roles = await getAllRoles();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
