import { IUseCaseError } from '@core/domain/errors/IUseCaseError';

class UsernameAlreadyExistsError extends Error implements IUseCaseError {
  statusCode: number;

  constructor(username: string) {
    super(`The username '${username}' is already registered!`);
    this.name = 'UsernameAlreadyExistsError';
    this.statusCode = 400;
  }
}

export { UsernameAlreadyExistsError };
