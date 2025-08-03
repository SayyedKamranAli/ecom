import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { authorizeRoles } from '../middlewares/role.middleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);

// 🛡️ Protected route (admin only)
router.get('/admin', authenticate, authorizeRoles('admin'), (req, res) => {
  res.send('Welcome, Admin!');
});

// 🛡️ Protected route (user or admin)
router.get('/profile', authenticate, (req, res) => {
  res.send(`Welcome, user ${(req as any).user?.id}`);
});

export default router;
