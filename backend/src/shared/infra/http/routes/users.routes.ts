import { Router } from 'express';

import { CreateUserController } from '@modules/accounts/useCases/CreateUser/CreateUserController';
import { GetUserProfileController } from '@modules/accounts/useCases/GetUserProfile/GetUserProfileController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const getUserProfileController = new GetUserProfileController();

usersRoutes.post('/create', createUserController.handle);
usersRoutes.get(
  '/profile',
  ensureAuthenticated,
  getUserProfileController.handle
);

export { usersRoutes };
