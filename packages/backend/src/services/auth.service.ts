import * as argon from 'argon2';
import { v4 as uuidv4 } from 'uuid';
import UserDto from '../dtos/user.dto';
import { AppSource } from '../config/database';
import { User } from '../entities/User';
import { mailService } from './mail.service';
import { tokenService } from './token.service';

export default class AuthSevices {
  private userRepository = AppSource.getRepository(User);

  async registrationUser(data: User) {
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

    const userDto = new UserDto(newUser);

    const tokens = tokenService.generateTokens(userDto);

    await tokenService.saveToken(newUser.id, tokens.refreshToken);

    await mailService.sendActivate(email, activationLink);

    return { ...tokens, user: userDto };
  }

  async activate(activationLink: string) {
    const user = await this.userRepository.findOneBy({ activationLink });

    if (!user) {
      throw new Error('incorrect activation link');
    }

    await this.userRepository.update(user.id, { isActivated: true });
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

    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens(userDto);

    await tokenService.saveToken(user.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async logout(refreshToken: string) {
    const user = await this.userRepository.findOneBy({ refreshToken });

    if (user) {
      await this.userRepository.update(user.id, { refreshToken: '' });
    }
  }

  async forgotPassword(email: string) {
    const user = await this.userRepository.findOneBy({ email });

    if (!user) {
      throw new Error('This user not found');
    }

    const userDto = new UserDto(user);

    const activationLink = uuidv4();

    await this.userRepository.update(user.id, { activationLink });

    await mailService.sendChangeLink(email, activationLink);

    return { userDto };
  }

  async recoverPassword(activationLink: string) {
    const user = await this.userRepository.findOneBy({ activationLink });

    if (!user) {
      throw new Error('incorrect activation link');
    }
  }

  async updatePassword(password: string, activationLink: string) {
    const user = await this.userRepository.findOneBy({ activationLink });

    if (!user) {
      throw new Error('This user not found');
    }

    const hashPassword = await argon.hash(password);

    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens(userDto);

    await this.userRepository.update(user.id, { password: hashPassword });

    await tokenService.saveToken(user.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async resetPassword(password: string, newPassword: string, refreshToken: string) {
    const user = await this.userRepository.findOneBy({ refreshToken });

    if (!user) {
      throw new Error('This user not found');
    }

    const matchPassword = argon.verify(user.password, password);

    if (!matchPassword) {
      throw new Error('This password id not valid');
    }

    const hashPassword = await argon.hash(newPassword);

    const userDto = new UserDto(user);

    await this.userRepository.update(user.id, { password: hashPassword });

    return { userDto };
  }
}

export const authServices = new AuthSevices();
