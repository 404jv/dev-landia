import { IUseCaseError } from '@core/domain/errors/IUseCaseError';

export class InvalidEmailOrPassword implements IUseCaseError {
  message: string;
  statusCode: number;
  name: string;

  constructor() {
    this.message = 'Invalid email or password';
    this.statusCode = 401;
    this.name = 'InvalidEmailOrPassword';
  }
}
