import { HttpSerivce } from '../../common/services/http.service';
import { IUserDataResponse } from '../types/auth.type';
import { IUserCreate, IUserLogin } from '../types/user.type';

class UserService extends HttpSerivce {
  registration({ ...data }: IUserCreate) {
    return this.post<IUserDataResponse>('/auth/registration', data);
  }

  login({ ...data }: IUserLogin) {
    return this.post<IUserDataResponse>('/auth/login', data);
  }

  logout() {
    return this.get<void>('/auth/logout');
  }
}

export const userService = new UserService();
