import { Router } from 'express';

import { celebrate, Joi, Segments } from 'celebrate';
import CustomersController from '../controllers/CustomersController';
import isAuthenticated from '@shared/infra/http/middlewares/isAuthenticated';

const cutomersRouter = Router();

const customersController = new CustomersController();

cutomersRouter.use(isAuthenticated);

cutomersRouter.get('/', customersController.index);

cutomersRouter.get(
  '/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().uuid().required() } }),
  customersController.show,
);
cutomersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    },
  }),
  customersController.create,
);

cutomersRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    },
    [Segments.PARAMS]: { id: Joi.string().uuid().required() },
  }),
  customersController.update,
);

cutomersRouter.delete(
  '/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().uuid().required() } }),
  customersController.delete,
);

export default cutomersRouter;
