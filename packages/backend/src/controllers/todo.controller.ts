import { Response, Request } from 'express';
import TodoService from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(_: Request, res: Response) {
    const todos = await this.todoService.findAllTodos();
    res.status(200).json(todos);
  }

  async getTodoById(req: Request, res: Response) {
    const { id } = req.params;

    const todo = await this.todoService.findTodoById(+id);

    res.json(todo);
  }

  async createTodo(req: Request, res: Response) {
    const data = req.body;

    const createdTodo = await this.todoService.createTodo(data);

    res.status(201).json(createdTodo);
  }

  async putTodo(req: Request, res: Response) {
    const data = req.body;
    const { id } = req.params;

    const updatedTodo = await this.todoService.updateTodo(+id, data);

    res.status(201).json(updatedTodo);
  }

  async removeTodo(req: Request, res: Response) {
    const { id } = req.params;

    const removedTodo = await this.todoService.deleteTodo(+id);

    res.status(202).json(removedTodo);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
