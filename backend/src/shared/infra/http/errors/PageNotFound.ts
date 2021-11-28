import { IAppError } from '@core/domain/errors/IAppError';

export class PageNotFound implements IAppError {
  message: string;
  statusCode: number;
  name: string;
  stack?: string;

  constructor() {
    this.message = 'Page Not Found';
    this.statusCode = 404;
  }
}
