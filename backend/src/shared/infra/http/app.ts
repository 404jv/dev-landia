import 'reflect-metadata';

import express from 'express';

import createConnection from '../typeorm/index';
import { router } from './routes';

createConnection().then(() => console.log('📦 Database connected.'));

const app = express();

app.use(router);

export { app };
