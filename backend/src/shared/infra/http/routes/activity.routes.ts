import { Router } from 'express';

import { AddOptionsToActivityController } from '@modules/game/useCases/AddOptionsToActivity/AddOptionsToActivityController';
import { CreateActivityController } from '@modules/game/useCases/CreateActivity/CreateActivityController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createActivityController = new CreateActivityController();
const addOptionsToActivityController = new AddOptionsToActivityController();

const activityRoutes = Router();

activityRoutes.use(ensureAuthenticated);
activityRoutes.post('/create', ensureAdmin, createActivityController.handle);
activityRoutes.post(
  '/add-options',
  ensureAdmin,
  addOptionsToActivityController.handle
);

export { activityRoutes };
