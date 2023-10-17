import jwt from 'jsonwebtoken';

export const generateToken = (id: number) => {
  const payload = String(id);

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
};
