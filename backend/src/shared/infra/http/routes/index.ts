import { response, Router } from 'express';

import { activityRoutes } from './activity.routes';
import { authenticateRoutes } from './authenticate.routes';
import { mapsRoutes } from './maps.routes';
import { phasesRoutes } from './phases.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/maps', mapsRoutes);
router.use('/phases', phasesRoutes);
router.use('/activities', activityRoutes);
router.use('/', authenticateRoutes);

export { router };
