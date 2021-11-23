import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    // const createUserUseCase = new CreateUserUseCase();

    // await createUserUseCase.execute();

    return response.sendStatus(200);
  }
}

export { CreateUserController };
