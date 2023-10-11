import { Todo } from '../entities/Todo';
import { ITodo } from '../types/todos.type';
import { AppSource } from '../config/database';

export default class TodoService {
  private todoRepository = AppSource.getRepository(Todo);

  async findAllTodos(): Promise<ITodo[]> {
    const allTodos = await this.todoRepository.find();

    return allTodos;
  }

  async findTodoById(id: number): Promise<Todo | null> {
    const todo = await this.todoRepository.findOneBy({ id });

    return todo;
  }

  async createTodo(data: ITodo): Promise<ITodo> {
    const newTodo = await this.todoRepository.create({ ...data }).save();

    return newTodo;
  }

  async updateTodo(id: number, data: Todo): Promise<Todo | null> {
    await this.todoRepository.update(id, data);

    const updatedTodo = await this.todoRepository.findOneBy({ id });

    return updatedTodo;
  }

  async deleteTodo(id: number): Promise<Todo | null> {
    const findTodo = await this.findTodoById(id);

    if (findTodo) {
      await this.todoRepository.remove(findTodo);
    }

    return findTodo;
  }
}
