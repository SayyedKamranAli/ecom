import { Router } from 'express';
import { createRoleController, getRolesController } from '../controllers/role.controller';

const router = Router();

router.post('/create', createRoleController); // POST /api/roles/create
router.get('/', getRolesController);          // GET /api/roles

export default router;
