import { Router } from 'express';

import { CreateActivityController } from '@modules/game/useCases/CreateActivity/CreateActivityController';

const createActivityController = new CreateActivityController();

const activityRoutes = Router();

activityRoutes.post('/create', createActivityController.handle);

export { activityRoutes };
