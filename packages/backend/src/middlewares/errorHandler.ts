import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { isHttpError } from 'http-errors';

export const tryCatch =
  (callback: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await callback(req, res, next);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error:', error);
        const errorMessage = error.message || 'Internal Server Error';
        res.status(500).json({ message: errorMessage });
      } else {
        console.error('Unknown error:', error);
        res.status(500).json({ message: 'Unknown error occurred.' });
      }
    }
  };

export interface ServiceWithFindById<T> {
  findById(id: number): Promise<T | null>;
}

export const isExist =
  <T>(service: ServiceWithFindById<T>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const exists = await service.findById(+id);

    if (exists) {
      next();
    } else {
      res.status(404).json({ error: 'Data not found' });
    }
  };

export const handlerError: ErrorRequestHandler = (error: unknown, req: Request, res: Response) => {
  console.log(error);

  let errorMessage = 'An unknown error occerred';
  let statusCode = 500;

  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }

  res.status(statusCode).json({ error: errorMessage });
};
