import { Router } from 'express';

import { CreateActivityController } from '@modules/game/useCases/CreateActivity/CreateActivityController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createActivityController = new CreateActivityController();

const activityRoutes = Router();

activityRoutes.use(ensureAuthenticated);
activityRoutes.post('/create', ensureAdmin, createActivityController.handle);

export { activityRoutes };
