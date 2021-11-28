import { IAppError } from '@core/domain/errors/IAppError';

export class InvalidEmailOrPassword implements IAppError {
  message: string;
  statusCode: number;
  name: string;

  constructor() {
    this.message = 'Invalid email or password';
    this.statusCode = 401;
    this.name = 'InvalidEmailOrPassword';
  }
}
