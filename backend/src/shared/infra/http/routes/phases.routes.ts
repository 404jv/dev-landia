import { Router } from 'express';

import { CreatePhaseController } from '@modules/phases/useCases/CreatePhase/CreatePhaseController';
import { ListPhasesController } from '@modules/phases/useCases/ListPhases/ListPhasesController';
import { UpdatePhaseController } from '@modules/phases/useCases/UpdatePhase/UpdatePhaseController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const phasesRoutes = Router();

const createPhaseController = new CreatePhaseController();
const listPhasesController = new ListPhasesController();
const updatePhaseController = new UpdatePhaseController();

phasesRoutes.use(ensureAuthenticated);

phasesRoutes.post('/create', ensureAdmin, createPhaseController.handle);

phasesRoutes.put('/update/:id', ensureAdmin, updatePhaseController.handle);

phasesRoutes.get('/', ensureAdmin, listPhasesController.handle);

export { phasesRoutes };
