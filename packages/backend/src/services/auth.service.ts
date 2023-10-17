import * as argon from 'argon2';
import { v4 as uuidv4 } from 'uuid';
import { AppSource } from '../config/database';
import { User } from '../entities/User';
import { mailService } from './mail.service';
import { tokenService } from './token.service';

export default class AuthSevices {
  private userRepository = AppSource.getRepository(User);

  async registrationUser(data: User): Promise<User | any> {
    const { email, password } = data;

    const candidate = await this.userRepository.findOneBy({ email });

    if (candidate) {
      throw new Error('This user is already registered');
    }

    const hashPassword = await argon.hash(password);

    const activationLink = uuidv4();

    const newUser = await this.userRepository
      .create({ email, password: hashPassword, activationLink })
      .save();

    const tokens = tokenService.generateTokens(email);

    await tokenService.saveToken(newUser.id, tokens.refreshToken);

    await mailService.sendActivate(email, activationLink);

    return { ...tokens, newUser };
  }

  async activate(activationLink: string) {
    const user = await this.userRepository.findOneBy({ activationLink });

    if (!user) {
      throw new Error('incorrect activation link');
    }

    await this.userRepository.update(user.id, { activationLink });
  }

  async loginUser(data: User) {
    const { email, password } = data;

    const user = await this.userRepository.findOneBy({ email });

    if (!user) {
      throw new Error('This user not found');
    }

    const matchPassword = argon.verify(user.password, password);

    if (!matchPassword) {
      throw new Error('This password id not valid');
    }

    const tokens = tokenService.generateTokens(email);

    await tokenService.saveToken(user.id, tokens.refreshToken);

    return { ...tokens, user };
  }

  async logout(refreshToken: string) {
    const user = await this.userRepository.findOneBy({ refreshToken });

    if (user) {
      await this.userRepository.update(user.id, { refreshToken: '' });
    }
  }
}

export const authServices = new AuthSevices();
