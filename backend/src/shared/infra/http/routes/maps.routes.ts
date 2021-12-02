import { Router } from 'express';

import { CreateMapController } from '@modules/game/useCases/CreateMap/CreateMapController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const mapsRoutes = Router();

const createMapController = new CreateMapController();
mapsRoutes.use(ensureAuthenticated);

mapsRoutes.post('/create', ensureAdmin, createMapController.handle);

export { mapsRoutes };
