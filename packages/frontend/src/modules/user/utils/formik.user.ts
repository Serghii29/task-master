import { useFormik } from 'formik';
import {
  INITIAL_VALUE_AUTH,
  INITIAL_VALUE_LOGIN,
  INITIAL_VALUE_FORGOT,
  INITIAL_VALUE_CHANGE_PASSWORD
} from '../const/initial-user.const';
import { IUserCreate, IUserLogin } from '../types/user.type';
import { login, registration } from './fetch.user';
import { authSchema, forgotSchema, loginSchema, changeSchema } from './validatorForm';

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
    onSubmit: (values) => values.email
  });

  return formik;
};

export const profileForm = () => {
  const formik = useFormik({
    initialValues: INITIAL_VALUE_CHANGE_PASSWORD,
    validationSchema: changeSchema,
    onSubmit: (values) => values
  });

  return formik;
};
