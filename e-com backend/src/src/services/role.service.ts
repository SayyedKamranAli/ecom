import { Role } from "../entities/Roles";

export const createRole = async (name: string) => {
  const existing = await Role.findOneBy({ name });
  if (existing) throw new Error('Role already exists');
  const role = Role.create({ name });
  return await role.save();
};

export const getAllRoles = async () => {
  return await Role.find();
};
