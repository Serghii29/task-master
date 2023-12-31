import { useFormik } from 'formik';
import { useCreate } from '../hooks/useCreate';
import { useTodo } from '../hooks/useTodo';
import { useUpdate } from '../hooks/useUpdate';
import { ICreateTodo, ITodo, IUpdateTodo } from '../types/todo.types';
import { addFormSchema, updateFormSchema } from './validatorForm.todo';
import { INITIAL_VALUE } from '../const/initial-values.const';

export const createForm = (add: boolean, id?: number) => {
  const validationSchema = add ? addFormSchema : updateFormSchema;
  const initialValues = { ...INITIAL_VALUE };

  if (id) {
    const { data: todo } = useTodo(id);
    const { title, description, isPublic, completed } = todo as ITodo;

    initialValues.title = title;
    initialValues.description = description;
    initialValues.isPublic = isPublic;
    initialValues.completed = completed;
  }

  const { mutate: creareTodo } = useCreate();

  const { mutate: updateTodo } = useUpdate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: IUpdateTodo | ICreateTodo) => {
      if (add) {
        creareTodo(values as ICreateTodo);
      } else {
        updateTodo([id as number, values]);
      }
    }
  });

  return formik;
};
