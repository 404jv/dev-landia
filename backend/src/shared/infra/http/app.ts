import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import { IAppError } from '@core/domain/errors/IAppError';

import createConnection from '../typeorm/index';
import { router } from './routes';

import '@shared/container';

createConnection().then(() => console.log('📦 Database connected.'));

const app = express();
app.use(express.json());

app.use(router);

app.use(
  (
    error: IAppError,
    _request: Request,
    response: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
  ) => {
    return response.status(error.statusCode).json({
      message: error.message,
    });
  }
);

export { app };
