import Joi from 'joi';

export const todoAddSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  isPublic: Joi.boolean().required(),
  completed: Joi.boolean()
});

export const todoUpdateSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  isPublic: Joi.boolean(),
  completed: Joi.boolean()
});
