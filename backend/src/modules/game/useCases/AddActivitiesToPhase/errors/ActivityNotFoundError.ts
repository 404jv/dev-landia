import { IAppError } from '@core/domain/errors/IAppError';

class ActivityNotFoundError implements IAppError {
  message: string;
  statusCode: number;
  name: string;
  stack?: string;

  constructor(activity_id: string) {
    this.message = `Activity with the id ${activity_id} not found`;
    this.statusCode = 404;
    this.message = 'ActivityNotFoundError';
  }
}

export { ActivityNotFoundError };
