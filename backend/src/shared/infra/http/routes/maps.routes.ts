import { Router } from 'express';

import { CreateMapController } from '@modules/maps/useCases/CreateMap/CreateMapController';
import { ListMapsController } from '@modules/maps/useCases/ListMaps/ListMapsController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const mapsRoutes = Router();

const createMapController = new CreateMapController();
const listMapsController = new ListMapsController();
mapsRoutes.use(ensureAuthenticated);

mapsRoutes.post('/create', ensureAdmin, createMapController.handle);

mapsRoutes.get('/', ensureAdmin, listMapsController.handle);

export { mapsRoutes };
