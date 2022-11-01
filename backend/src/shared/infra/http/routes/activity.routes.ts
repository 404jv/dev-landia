import { Router } from 'express';

import { AddOptionsToActivityController } from '@modules/activities/useCases/AddOptionsToActivity/AddOptionsToActivityController';
import { CreateActivityController } from '@modules/activities/useCases/CreateActivity/CreateActivityController';
import { ListActivitiesController } from '@modules/activities/useCases/ListActivities/ListActivitiesController';
import { UpdateActivityController } from '@modules/activities/useCases/UpdateActivity/UpdateActivityController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createActivityController = new CreateActivityController();
const addOptionsToActivityController = new AddOptionsToActivityController();
const listActivitiesController = new ListActivitiesController();
const updateActivityController = new UpdateActivityController();

const activityRoutes = Router();

activityRoutes.use(ensureAuthenticated);
activityRoutes.post('/create', ensureAdmin, createActivityController.handle);
activityRoutes.post(
  '/add-options',
  ensureAdmin,
  addOptionsToActivityController.handle
);
activityRoutes.get('/', ensureAdmin, listActivitiesController.handle);
activityRoutes.put('/update/:id', ensureAdmin, updateActivityController.handle);

export { activityRoutes };
