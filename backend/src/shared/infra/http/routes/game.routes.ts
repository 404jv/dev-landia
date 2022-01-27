import { Router } from 'express';

import { ListTreeController } from '@modules/game/useCases/ListTree/ListTreeController';
import { GetPhaseController } from '@modules/phases/useCases/getPhase/GetPhaseController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const gameRoutes = Router();

const listTreeController = new ListTreeController();
const getPhaseController = new GetPhaseController();

gameRoutes.use(ensureAuthenticated);
gameRoutes.get('/tree', listTreeController.handle);
gameRoutes.get('/get-phase', getPhaseController.handle);

export { gameRoutes };
