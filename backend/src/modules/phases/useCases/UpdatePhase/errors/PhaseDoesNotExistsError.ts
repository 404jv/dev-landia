import { IAppError } from '@core/domain/errors/IAppError';

class PhaseDoesNotExistsError implements IAppError {
  statusCode: number;

  message: string;

  name: string;

  stack?: string;

  constructor() {
    this.message = 'Phase with this id does not exists!';

    this.name = 'PhaseDoesNotExistsError';

    this.statusCode = 404;
  }
}

export { PhaseDoesNotExistsError };
