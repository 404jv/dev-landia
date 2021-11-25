import { IUseCaseError } from '@core/domain/errors/IUseCaseError';

class UsernameAlreadyExistsError implements IUseCaseError {
  statusCode: number;
  message: string;
  name: string;
  stack?: string;

  constructor(username: string) {
    this.message = `The username '${username}' is already registered!`;
    this.name = 'UsernameAlreadyExistsError';
    this.statusCode = 400;
  }
}

export { UsernameAlreadyExistsError };
