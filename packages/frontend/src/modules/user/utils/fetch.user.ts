import { APP_KEYS } from '../../common/consts';
import { userService } from '../services/user.service';
import { IChangePassword, IRecoverPassword, IUserCreate, IUserLogin } from '../types/user.type';

export const registration = async (data: IUserCreate) => {
  const user = await userService.registration(data);
  localStorage.setItem(APP_KEYS.STORAGE_KEYS.TOKEN, user.data.accessToken);
};

export const login = async (data: IUserLogin) => {
  const user = await userService.login(data);

  return user;
};

export const logout = async () => {
  await userService.logout();
};

export const changePassword = async (data: IChangePassword) => {
  const user = await userService.changePassword(data);

  return user;
};

export const forgotPassport = async ({ ...data }: { email: string }) => {
  await userService.forgotPassword(data);
};

export const recoverPassword = async ({ ...data }: IRecoverPassword) => {
  const user = await userService.recoverPassword(data);

  return user;
};
