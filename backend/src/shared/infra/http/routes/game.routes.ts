import { Router } from 'express';

import { GetPhaseController } from '@modules/game/useCases/getPhase/GetPhaseController';
import { ListTreeController } from '@modules/game/useCases/ListTree/ListTreeController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const gameRoutes = Router();

const listTreeController = new ListTreeController();
const getPhaseController = new GetPhaseController();

gameRoutes.use(ensureAuthenticated);
gameRoutes.get('/tree', listTreeController.handle);
gameRoutes.get('/get-phase', getPhaseController.handle);

export { gameRoutes };
