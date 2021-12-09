import { IAppError } from '@core/domain/errors/IAppError';

class MapNotFoundError implements IAppError {
  message: string;
  statusCode: number;
  name: string;
  stack?: string;

  constructor() {
    this.message = 'Map not found';
    this.statusCode = 404;
    this.name = 'MapNotFoundError';
  }
}

export { MapNotFoundError };
