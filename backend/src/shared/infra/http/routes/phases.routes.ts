import { Router } from 'express';

import { CreatePhaseController } from '@modules/phases/useCases/CreatePhase/CreatePhaseController';
import { ListPhasesController } from '@modules/phases/useCases/ListPhases/ListPhasesController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const phasesRoutes = Router();

const createPhaseController = new CreatePhaseController();
const listPhasesController = new ListPhasesController();

phasesRoutes.use(ensureAuthenticated);
phasesRoutes.post('/create', ensureAdmin, createPhaseController.handle);
phasesRoutes.get('/', listPhasesController.handle);

export { phasesRoutes };
