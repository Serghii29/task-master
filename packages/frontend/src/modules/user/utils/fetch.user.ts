import { APP_KEYS } from '../../common/consts';
import { userService } from '../services/user.service';
import { IChangePassword, IRecoverPassword, IUserCreate, IUserLogin } from '../types/user.type';

export const registration = async (data: IUserCreate) => {
  await userService.registration(data);
};

export const login = async (data: IUserLogin) => {
  const user = await userService.login(data);

  localStorage.setItem(APP_KEYS.STORAGE_KEYS.TOKEN, user.data.accessToken);

  return user;
};

export const logout = async () => {
  await localStorage.setItem(APP_KEYS.STORAGE_KEYS.TOKEN, '');
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
