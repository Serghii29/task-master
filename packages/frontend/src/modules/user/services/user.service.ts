import { HttpSerivce } from '../../common/services/http.service';
import { IUserDataResponse } from '../types/auth.type';
import { IChangePassword, IRecoverPassword, IUserCreate, IUserLogin } from '../types/user.type';

class UserService extends HttpSerivce {
  registration({ ...data }: IUserCreate) {
    return this.post<IUserDataResponse>('auth/registration', data);
  }

  login({ ...data }: IUserLogin) {
    return this.post<IUserDataResponse>('auth/login', data);
  }

  logout() {
    return this.get<void>('auth/logout');
  }

  changePassword({ ...data }: IChangePassword) {
    return this.post<IUserDataResponse>('auth/reset-password', data);
  }

  forgotPassword({ ...data }: { email: string }) {
    return this.post('auth/forgot-password', data);
  }

  recoverPassword({ ...data }: IRecoverPassword) {
    return this.post('auth/recover-password', data);
  }
}

export const userService = new UserService();
