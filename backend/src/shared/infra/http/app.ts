import express from 'express';

import { router } from './routes';

const app = express();

app.use(router);

export { app };
