import { IUseCaseError } from '@core/domain/errors/IUseCaseError';

class EmailAlreadyExistsError implements IUseCaseError {
  statusCode: number;
  message: string;
  name: string;
  stack?: string;

  constructor(email: string) {
    this.message = `The email '${email}' is already registered!`;
    this.name = 'EmailAlreadyExistsError';
    this.statusCode = 400;
  }
}

export { EmailAlreadyExistsError };
