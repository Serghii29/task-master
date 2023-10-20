import { useFormik } from 'formik';
import {
  INITIAL_VALUE_AUTH,
  INITIAL_VALUE_LOGIN,
  INITIAL_VALUE_FORGOT,
  INITIAL_VALUE_CHANGE_PASSWORD,
  INITIAL_VALUE_RECOVER_PASSWORD
} from '../const/initial-user.const';
import { IUserCreate, IUserLogin } from '../types/user.type';
import { changePassword, forgotPassport, login, recoverPassword, registration } from './fetch.user';
import {
  authSchema,
  forgotSchema,
  loginSchema,
  changeSchema,
  recoverSchema
} from './validatorForm';

export const userForm = (isLogin: boolean) => {
  const validationSchema = isLogin ? loginSchema : authSchema;

  const initialValues = isLogin ? INITIAL_VALUE_LOGIN : INITIAL_VALUE_AUTH;

  const handleLogin = (data: IUserLogin) => {
    login(data);
  };

  const handleRegistration = (data: IUserCreate) => {
    registration(data);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: IUserCreate | IUserLogin) => {
      if (isLogin) {
        handleLogin(values);
      } else {
        handleRegistration(values as IUserCreate);
      }
    }
  });

  return formik;
};

export const forgotForm = () => {
  const formik = useFormik({
    initialValues: INITIAL_VALUE_FORGOT,
    validationSchema: forgotSchema,
    onSubmit: (values) => forgotPassport(values)
  });

  return formik;
};

export const recoverForm = () => {
  const formik = useFormik({
    initialValues: INITIAL_VALUE_RECOVER_PASSWORD,
    validationSchema: recoverSchema,
    onSubmit: (values) => recoverPassword(values)
  });

  return formik;
};

export const profileForm = () => {
  const formik = useFormik({
    initialValues: INITIAL_VALUE_CHANGE_PASSWORD,
    validationSchema: changeSchema,
    onSubmit: (values) => changePassword(values)
  });

  return formik;
};
