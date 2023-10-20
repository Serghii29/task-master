import { Router } from 'express';
import { body } from 'express-validator';
import authController from '../../controllers/auth.controller';
import { tryCatch } from '../../middlewares/errorHandler.middleware';

const authRoute = Router();

authRoute.post(
  '/registration',
  [
    body('email').isEmail(),
    body('password', 'Password must be more than 8 characters').isLength({ min: 8 })
  ],
  tryCatch(authController.registration.bind(authController))
);
authRoute.post('/login', tryCatch(authController.login.bind(authController)));

authRoute.post('/logout', tryCatch(authController.logout.bind(authController)));

authRoute.get('/activate/:link', tryCatch(authController.activate.bind(authController)));

authRoute.get(
  '/change-link/:link',
  tryCatch(authController.recoverPasswordLink.bind(authController))
);

authRoute.post(
  '/forgot-password',
  [body('email').isEmail()],
  tryCatch(authController.forgotPassword.bind(authController))
);

authRoute.post(
  '/recover-password',
  [body('email').isEmail()],
  tryCatch(authController.recoverPassword.bind(authController))
);

authRoute.post(
  '/reset-password',
  [body('email').isEmail()],
  tryCatch(authController.reset.bind(authController))
);

export default authRoute;
