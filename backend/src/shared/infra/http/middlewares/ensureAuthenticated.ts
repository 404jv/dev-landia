import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import auth from '@config/auth';

import { AccessDeniedError } from '../errors/AccessDeniedError';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authBearer = request.headers.authorization;

  if (!authBearer) {
    throw new AccessDeniedError('Token is missing');
  }

  const [, token] = authBearer.split(' ');

  try {
    const { sub: user_id } = verify(token, auth.secret_token) as IPayload;

    request.user = {
      id: user_id,
    };

    next();
  } catch (error) {
    throw new AccessDeniedError('Invalid Token');
  }
}
