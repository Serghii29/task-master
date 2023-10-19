import { userService } from '../services/user.service';
import { IUserCreate, IUserLogin } from '../types/user.type';

export const registration = async (data: IUserCreate) => {
  const user = await userService.registration(data);

  return user;
};

export const login = async (data: IUserLogin) => {
  const user = await userService.login(data);

  return user;
};

export const logout = async () => {
  userService.logout();
};
