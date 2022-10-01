import { IAppError } from '@core/domain/errors/IAppError';

class MapDoesNotExistsError implements IAppError {
  statusCode: number;
  message: string;
  name: string;
  stack?: string;

  constructor() {
    this.message = 'Map with this id does not exists!';
    this.name = 'MapDoesNotExistsError';
    this.statusCode = 404;
  }
}

export { MapDoesNotExistsError };
