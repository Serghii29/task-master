import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password should be of minimum 8 characters length')
});

export const authSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password should be of minimum 8 characters length'),
  confirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Password confirmation is required')
});

export const forgotSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required')
});

export const changeSchema = yup.object().shape({
  old_password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password should be of minimum 8 characters length'),
  new_password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password should be of minimum 8 characters length')
});
