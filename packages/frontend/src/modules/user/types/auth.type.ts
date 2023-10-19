import { IUser } from './user.type';

export interface IUserDataResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
