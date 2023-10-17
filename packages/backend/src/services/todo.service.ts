import { Todo } from '../entities/Todo';
import { AppSource } from '../config/database';

export default class TodoService {
  private todoRepository = AppSource.getRepository(Todo);

  async findAllTodos(): Promise<Todo[]> {
    const allTodos = await this.todoRepository.find();

    return allTodos;
  }

  async findById(id: number): Promise<Todo | null> {
    const todo = await this.todoRepository.findOneBy({ id });

    return todo;
  }

  async createTodo(data: Todo): Promise<Todo> {
    const newTodo = await this.todoRepository.create({ ...data }).save();

    return newTodo;
  }

  async updateTodo(id: number, data: Todo): Promise<Todo | null> {
    await this.todoRepository.update(id, data);

    const updatedTodo = await this.todoRepository.findOneBy({ id });

    return updatedTodo;
  }

  async deleteTodo(id: number): Promise<void> {
    const findTodo = await this.findById(id);

    if (findTodo) {
      await this.todoRepository.remove(findTodo);
    }
  }
}

export const todoService = new TodoService();
