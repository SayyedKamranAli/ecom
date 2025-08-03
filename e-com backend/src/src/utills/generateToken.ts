import jwt from 'jsonwebtoken';

export const generateToken = (user: { id: string; roles: string[] }) => {
  return jwt.sign(
    { id: user.id, roles: user.roles },
    process.env.JWT_SECRET!,
    { expiresIn: '1d' }
  );
};
