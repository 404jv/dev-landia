import { Router } from 'express';

import { ListTreeController } from '@modules/game/useCases/ListTree/ListTreeController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const gameRoutes = Router();

const listTreeController = new ListTreeController();

gameRoutes.use(ensureAuthenticated);
gameRoutes.get('/tree', listTreeController.handle);

export { gameRoutes };
