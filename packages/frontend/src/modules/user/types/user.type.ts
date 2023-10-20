export interface IUserCreate {
  email: string;
  password: string;
  confirm: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  isActived: boolean;
  id: number;
}

export interface IChangePassword {
  old_password: string;
  new_password: string;
}

export interface IRecoverPassword {
  password: string;
  confirm: string;
}
