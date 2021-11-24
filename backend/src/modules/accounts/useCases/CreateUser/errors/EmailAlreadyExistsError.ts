import { IUseCaseError } from '@core/domain/errors/IUseCaseError';

class EmailAlreadyExistsError extends Error implements IUseCaseError {
  statusCode: number;

  constructor(email: string) {
    super(`The email '${email}' is already registered!`);
    this.name = 'EmailAlreadyExistsError';
    this.statusCode = 400;
  }
}

export { EmailAlreadyExistsError };
