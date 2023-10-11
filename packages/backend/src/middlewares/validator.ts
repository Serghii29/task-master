import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';

export const validate =
  (schema: Joi.ObjectSchema, property: 'body' | 'params' | 'query') =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[property]);
    const valid = error === undefined;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');

      console.error('validation error:', message);
      res.status(400).json({ error: message });
    }
  };
