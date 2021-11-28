import { Router } from 'express';

import { CreateMapController } from '@modules/maps/useCases/CreateMap/CreateMapController';

const mapsRoutes = Router();

const createMapController = new CreateMapController();

mapsRoutes.post('/create', createMapController.handle);

export { mapsRoutes };
