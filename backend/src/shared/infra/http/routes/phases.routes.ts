import { Router } from 'express';

import { AddActivitiesToPhaseController } from '@modules/activities/useCases/AddActivitiesToPhase/AddActivitiesToPhaseController';
import { CreatePhaseController } from '@modules/phases/useCases/CreatePhase/CreatePhaseController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const phasesRoutes = Router();

const createPhaseController = new CreatePhaseController();
const addActivitiesToPhaseController = new AddActivitiesToPhaseController();

phasesRoutes.use(ensureAuthenticated);
phasesRoutes.post('/create', ensureAdmin, createPhaseController.handle);
phasesRoutes.post(
  '/add-activities',
  ensureAdmin,
  addActivitiesToPhaseController.handle
);

export { phasesRoutes };
