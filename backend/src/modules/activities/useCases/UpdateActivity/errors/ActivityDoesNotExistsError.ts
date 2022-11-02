import { IAppError } from '@core/domain/errors/IAppError';

class ActivityDoesNotExistsError implements IAppError {
  statusCode: number;

  message: string;

  name: string;

  stack?: string;

  constructor() {
    this.message = 'Activity with this id does not exists!';

    this.name = 'ActivityDoesNotExistsError';

    this.statusCode = 404;
  }
}

export { ActivityDoesNotExistsError };
