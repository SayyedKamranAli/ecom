// controllers/userController.ts
import { Request, Response } from "express";
import { AppDataSource } from "../config/ormconfig";
import { User } from "../entities/User";
import { Role } from "../entities/Roles";
import { In } from "typeorm";
import { UserService } from "../services/user.service";
import { stat } from "fs";

const userService = new UserService();

// export const assignRolesToUser = async (req: Request, res: Response) => {
//   const userId = req.params.id;
//   const { roles } = req.body; // example: roles = ["admin", "superadmin"]

//   try {
//     const userRepo = AppDataSource.getRepository(User);
//     const roleRepo = AppDataSource.getRepository(Role);

//     const user = await userRepo.findOne({ where: { id: userId }, relations: ["roles"] });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const foundRoles = await roleRepo.find({ where: { name: In(roles) } });

//     if (foundRoles.length === 0) return res.status(400).json({ message: "No valid roles found" });

//     user.roles = foundRoles;
//     await userRepo.save(user);

//     res.json({ message: "Roles assigned successfully", user });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

export const assignRolesToUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const { roles } = req.body; // example: ["admin", "superadmin"]

  try {
    const user = await userService.assignRolesToUser(userId, roles);
    res.json({ message: 'Roles assigned successfully', user });
  } catch (error: any) {
    console.error(error);
    const statusCode = error.message === 'User not found' || error.message === 'No valid roles found' ? 400 : 500;
    res.status(statusCode).json({ message: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const user = await userService.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({user: {
      id: user.id,
      name: user.name,
      email: user.email,
      roles: user.roles.map((r) => r.name),
    },
    message: "User fetched successfully",
    status: "success"});
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const user = await userService.findAll();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({user,
    message: "All User fetched successfully",
    status: "success"});
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
