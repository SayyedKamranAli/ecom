// src/services/user.service.ts

import { AppDataSource } from "../config/ormconfig";
import { User } from "../entities/User";
import { Role } from "../entities/Roles";
import { In } from "typeorm";

export class UserService {
  private userRepository = AppDataSource.getRepository(User);
  private roleRepository = AppDataSource.getRepository(Role);

  async findAll() {
    return await this.userRepository.find({
      relations: ["roles"], // include roles
    });
  }

  async findById(id: string) {
    return await this.userRepository.findOne({
      where: { id },
      relations: ["roles"],
    });
  }

  async assignRolesToUser(userId: string, roles: string[]) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ["roles"],
    });

    if (!user) {
      throw new Error("User not found");
    }

    const foundRoles = await this.roleRepository.find({
      where: { name: In(roles) },
    });

    if (foundRoles.length === 0) {
      throw new Error("No valid roles found");
    }

    user.roles = foundRoles;
    await this.userRepository.save(user);

    return user;
  }

  async deleteUser(userId: string) {
    return await this.userRepository.delete(userId);
  }
}

//   export const assignRoles = async(userId: string, roleIds: string[]) => {
//     const user = await User.findOne({
//       where: { id: userId },
//       relations: ['roles'],
//     });

//     if (!user) throw new Error('User not found');

//     const roles = await Role.findByIds(roleIds);
//     console.log('roles', roles)
//     user.roles = roles;

//     return await User.save(user);
//   }
