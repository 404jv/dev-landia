import { IAppError } from '@core/domain/errors/IAppError';

class PhaseNotFoundError implements IAppError {
  message: string;
  statusCode: number;
  name: string;
  stack?: string;

  constructor() {
    this.message = 'Phase Not Found';
    this.statusCode = 404;
    this.name = 'PhaseNotFoundError';
  }
}

export { PhaseNotFoundError };
