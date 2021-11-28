import { Router } from 'express';

import { CreateMapController } from '@modules/maps/useCases/CreateMap/CreateMapController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const mapsRoutes = Router();

const createMapController = new CreateMapController();

mapsRoutes.post('/create', ensureAuthenticated, createMapController.handle);

export { mapsRoutes };
