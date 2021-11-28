import { IAppError } from '@core/domain/errors/IAppError';

class EmailAlreadyExistsError implements IAppError {
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
