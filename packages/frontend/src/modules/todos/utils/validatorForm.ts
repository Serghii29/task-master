import * as yup from 'yup';

export const addFormSchema = yup.object().shape({
  title: yup
    .string()
    .required('Title is required')
    .min(5, 'Title should be of minimum 5 characters length'),
  description: yup
    .string()
    .required('Description is required')
    .min(8, 'Description should be of minimum 8 characters length'),
  isPublic: yup.boolean().required('Required'),
  completed: yup.boolean().required('Required')
});

export const updateFormSchema = yup.object().shape({
  title: yup.string().min(5, 'Title should be of minimum 5 characters length'),
  description: yup.string().min(8, 'Description should be of minimum 8 characters length'),
  isPublic: yup.boolean(),
  completed: yup.boolean()
});
