import jwt from 'jsonwebtoken';
import { AppSource } from '../config/database';
import { User } from '../entities/User';

class TokenService {
  private userRepository = AppSource.getRepository(User);

  generateTokens(payload: string) {
    const newPayload = { email: payload };
    const expiresInSeconds = 30 * 24 * 60 * 60;
    const accessToken = jwt.sign(newPayload, process.env.JWT_SECRET, { expiresIn: '24h' });
    const refreshToken = jwt.sign(newPayload, process.env.JWT_EXPIRATION, {
      expiresIn: expiresInSeconds
    });

    return {
      accessToken,
      refreshToken
    };
  }

  async saveToken(userId: number, refreshToken: string) {
    const findUser = await this.userRepository.findOneBy({ id: userId });

    if (findUser) {
      await this.userRepository.update(userId, { refreshToken });
    }
  }
}

export const tokenService = new TokenService();
