/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';
import uploadConfig from '@config/upload';
import { errors } from 'celebrate';
import { pagination } from 'typeorm-pagination';

const app = express();

app.use(cors());
app.use(express.json());

app.use(pagination);
app.use('/files', express.static(uploadConfig.directory));

app.use(routes);

app.use(errors());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response
        .status(error.statusCode)
        .json({ status: 'error', message: error.message });
    }
    return response
      .status(500)
      .json({ status: 'error', messaage: 'Internal server error' });
  },
);

app.listen(process.env.APP_API_URL, () => {
  console.log(`server started on port ${process.env.APP_API_UR}`);
});
