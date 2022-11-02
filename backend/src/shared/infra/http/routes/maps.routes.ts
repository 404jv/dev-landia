import { Router } from 'express';

import { CreateMapController } from '@modules/maps/useCases/CreateMap/CreateMapController';
import { ListMapsController } from '@modules/maps/useCases/ListMaps/ListMapsController';
import { UpdateMapController } from '@modules/maps/useCases/UpdateMap/UpdateMapController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const mapsRoutes = Router();

const createMapController = new CreateMapController();
const listMapsController = new ListMapsController();
const updateMapController = new UpdateMapController();

mapsRoutes.use(ensureAuthenticated);

mapsRoutes.post('/create', ensureAdmin, createMapController.handle);

mapsRoutes.put('/update/:id', ensureAdmin, updateMapController.handle);

mapsRoutes.get('/', ensureAdmin, listMapsController.handle);

export { mapsRoutes };
