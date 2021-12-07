import { IAppError } from '@core/domain/errors/IAppError';

class InvalidMaxLevelError implements IAppError {
  message: string;
  statusCode: number;
  name: string;
  stack?: string;

  constructor() {
    this.message = 'Invalid max level to this kind of phase';
    this.statusCode = 400;
    this.name = 'InvalidMaxLevelError';
  }
}

export { InvalidMaxLevelError };
