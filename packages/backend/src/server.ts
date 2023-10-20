import bodyParser from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';
import createHttpError from 'http-errors';
import cookieParser from 'cookie-parser';

import AppRouter from './routes';
import connectDB from './config/database';
import { handlerError } from './middlewares/errorHandler.middleware';

const app = express();
const router = new AppRouter(app);

connectDB();

// Express configuration
app.set('port', process.env.PORT || 4200);
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000'
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.init();

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createHttpError(404, 'Endpoint not found'));
});

app.use(handlerError);

const port = app.get('port');
// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

export default server;
