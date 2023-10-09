import { Request, Response, NextFunction } from 'express';
import { environmentVariables } from '@conexa/environment';

export const authenticationMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const authorization = request.headers['x-api-key'];

  /* if (!authorization || authorization !== environmentVariables.API_KEY) {
    return response.status(401).json({
      message: 'Unauthorized',
    });
  } */

  next();
};
