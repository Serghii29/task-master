import { Router } from 'express';
import { isExist, tryCatch } from '../../middlewares/errorHandler';
import { validate } from '../../middlewares/validator';
import { todoAddSchema, todoUpdateSchema } from '../../validateSchema/todoSchema';

import todoController from '../../controllers/todo.controller';
import { todoService } from '../../services/todo.service';

const todosRouter: Router = Router();
// const todoService = new TodoService();

todosRouter.get('', tryCatch(todoController.getAllTodo.bind(todoController)));

todosRouter.get(
  '/:id',
  isExist(todoService),
  tryCatch(todoController.getTodoById.bind(todoController))
);

todosRouter.post(
  '',
  validate(todoAddSchema, 'body'),
  tryCatch(todoController.createTodo.bind(todoController))
);

todosRouter.put(
  '/:id',
  isExist(todoService),
  tryCatch(todoController.putTodo.bind(todoController)),
  validate(todoUpdateSchema, 'body')
);

todosRouter.delete(
  '/:id',
  isExist(todoService),
  tryCatch(todoController.removeTodo.bind(todoController))
);

export default todosRouter;
