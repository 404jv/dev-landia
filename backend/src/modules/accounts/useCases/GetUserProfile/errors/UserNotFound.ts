import { IAppError } from '@core/domain/errors/IAppError';

class UserNotFound implements IAppError {
  message: string;
  statusCode: number;
  name: string;
  stack?: string;

  constructor() {
    this.message = 'User not found';
    this.name = 'UserNotFound';
    this.statusCode = 404;
  }
}

export { UserNotFound };
