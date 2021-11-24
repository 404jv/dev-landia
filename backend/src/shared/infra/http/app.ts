import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import { IUseCaseError } from '@core/domain/errors/IUseCaseError';

import createConnection from '../typeorm/index';
import { router } from './routes';

import '@shared/container';

createConnection().then(() => console.log('📦 Database connected.'));

const app = express();
app.use(express.json());

app.use(router);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (
    error: IUseCaseError,
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    return response.status(error.statusCode).json({
      message: error.message,
    });
  }
);

export { app };
