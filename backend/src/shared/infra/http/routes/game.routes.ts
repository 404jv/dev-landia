import { Router } from 'express';

import { ListTreeController } from '@modules/game/useCases/ListTree/ListTreeController';
import { GetPracticePhaseController } from '@modules/phases/useCases/GetPracticePhase/GetPracticePhaseController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const gameRoutes = Router();

const listTreeController = new ListTreeController();
const getPracticePhaseController = new GetPracticePhaseController();

gameRoutes.use(ensureAuthenticated);
gameRoutes.get('/tree', listTreeController.handle);
gameRoutes.get(
  '/get-phase',
  ensureAuthenticated,
  getPracticePhaseController.handle
);

export { gameRoutes };
