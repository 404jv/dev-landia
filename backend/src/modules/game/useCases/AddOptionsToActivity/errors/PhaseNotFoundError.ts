import { IAppError } from '@core/domain/errors/IAppError';

class ActivityNotFoundError implements IAppError {
  message: string;
  statusCode: number;
  name: string;
  stack?: string;

  constructor() {
    this.message = 'Activity Not Found';
    this.statusCode = 404;
    this.name = 'ActivityNotFoundError';
  }
}

export { ActivityNotFoundError };
