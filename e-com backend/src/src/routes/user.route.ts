import { Router } from "express";
import { assignRolesToUser, getAllUsers, getUserById } from "../controllers/user.controller";

const router = Router();

router.get("/users/:id", getUserById); // GET /api/users/:id
router.get("/users", getAllUsers); // GET /api/users
router.put('/:id/assign-roles',assignRolesToUser); // Update /users/:id/assign-roles

export default router;