import { Router } from 'express';

import { CreatePhaseController } from '@modules/phases/useCases/CreatePhase/CreatePhaseController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const phasesRoutes = Router();

const createPhaseController = new CreatePhaseController();

phasesRoutes.use(ensureAuthenticated);
phasesRoutes.post('/create', ensureAdmin, createPhaseController.handle);

export { phasesRoutes };
