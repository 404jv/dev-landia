import { Router } from 'express';

import { CorrectPhaseController } from '@modules/game/useCases/CorrectPhase/CorrectPhaseController';
import { ListTreeController } from '@modules/game/useCases/ListTree/ListTreeController';
import { GetPracticePhaseController } from '@modules/phases/useCases/GetPracticePhase/GetPracticePhaseController';
import { GetTheoryPhaseController } from '@modules/phases/useCases/GetTheoryPhase/GetTheoryPhaseController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const gameRoutes = Router();

const listTreeController = new ListTreeController();
const getPracticePhaseController = new GetPracticePhaseController();
const getTheoryPhaseController = new GetTheoryPhaseController();
const correctPhaseController = new CorrectPhaseController();

gameRoutes.use(ensureAuthenticated);
gameRoutes.get('/tree', listTreeController.handle);
gameRoutes.get(
  '/practice-phase/:id',
  ensureAuthenticated,
  getPracticePhaseController.handle
);
gameRoutes.get(
  '/theory-phase/:id',
  ensureAuthenticated,
  getTheoryPhaseController.handle
);
gameRoutes.put(
  '/correct/:id',
  ensureAuthenticated,
  correctPhaseController.handle
);

export { gameRoutes };
