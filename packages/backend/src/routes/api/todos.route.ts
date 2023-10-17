import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { isExist, tryCatch } from '../../middlewares/errorHandler.middleware';
import { validate } from '../../middlewares/validator.middleware';
import { todoAddSchema, todoUpdateSchema } from '../../validateSchema/todoSchema';

import todoController from '../../controllers/todo.controller';
import { todoService } from '../../services/todo.service';

const todosRouter: Router = Router();

todosRouter.get('', authMiddleware, tryCatch(todoController.getAllTodo.bind(todoController)));

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
