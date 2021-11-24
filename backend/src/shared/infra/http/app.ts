import 'reflect-metadata';

import express from 'express';

import createConnection from '../typeorm/index';
import { router } from './routes';
import '@shared/container';

createConnection().then(() => console.log('📦 Database connected.'));

const app = express();
app.use(express.json());

app.use(router);

export { app };
