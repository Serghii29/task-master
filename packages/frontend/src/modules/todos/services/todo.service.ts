import { ICreateTodo, ITodo, IUpdateTodo } from '../../common/types/todo.types';
import { HttpSerivce } from './http.service';

class TodoService extends HttpSerivce {
  getAll() {
    return this.get<ITodo[]>('todos');
  }

  geById(id: number) {
    return this.get<ITodo>(`todos/${id}`);
  }

  remove(id: number) {
    return this.delete<void>(`todos/${id}`);
  }

  update(id: number, { ...data }: IUpdateTodo) {
    return this.put<ITodo>(`todos/${id}`, data);
  }

  add({ ...data }) {
    return this.post<ICreateTodo>('todos', data);
  }
}

export const todoService = new TodoService();
