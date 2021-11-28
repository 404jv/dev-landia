import { IAppError } from '@core/domain/errors/IAppError';

export class AccessDeniedError implements IAppError {
  message: string;
  statusCode: number;
  name: string;
  stack?: string;

  constructor(message: string) {
    this.message = message;
    this.statusCode = 401;
    this.name = 'AccessDeniedError';
  }
}
