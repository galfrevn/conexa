import supertest from 'supertest';

import { Application, Router } from 'express';
import { initializeServer } from '@/app';

import { describe, it, expect, beforeAll } from 'vitest';
import { environmentVariables } from '@conexa/environment';
import { authenticationMiddleware } from '@/middlewares/authentication';

describe('Authentication Middleware test battery', () => {
  let server: Application | undefined;

  beforeAll(() => {
    server = initializeServer();
    const securedRoute = Router().use('/', (req, res) => {
      res.status(200).json({ message: 'Secure Route' });
    });

    server?.use('/secure', authenticationMiddleware, securedRoute);
  });

  it('should return 401 if no API key is provided', async () => {
    const response = await supertest(server).get('/secure');
    expect(response.status).toBe(401);
    expect(response.body).toEqual({ message: 'Unauthorized' });
  });

  it('should return 401 if an incorrect API key is provided', async () => {
    const response = await supertest(server).get('/secure').set('x-api-key', 'incorrect-key');
    expect(response.status).toBe(401);
    expect(response.body).toEqual({ message: 'Unauthorized' });
  });

  it('should call next() if a valid API key is provided', async () => {
    const response = await supertest(server)
      .get('/secure')
      .set('x-api-key', environmentVariables.API_KEY);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Secure Route' });
  });
});
