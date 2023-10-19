import { todoService } from '../services/todo.service';
import { ICreateTodo, IUpdateTodo } from '../types/todo.types';

export const fetchTodos = async () => {
  const { data } = await todoService.getAll();

  return data;
};

export const fetchTodoById = async (id: number) => {
  const { data } = await todoService.geById(id);

  return data;
};

export const createNewTodo = async (data: ICreateTodo) => {
  await todoService.add(data);
};

export const removeTodo = async (id: number) => {
  await todoService.remove(id);
};

export const updateTodo = async (id: number, data: IUpdateTodo) => {
  await todoService.update(id, data);
};
