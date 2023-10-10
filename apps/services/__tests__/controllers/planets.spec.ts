import { Application } from 'express';

import supertest from 'supertest';
import { describe, it, expect, beforeAll } from 'vitest';

import { initializeServer } from '@/app';
import { planetsRoute } from '@/controllers/planets';

import { environmentVariables } from '@conexa/environment';

describe('Planets router test battery', () => {
  let server: Application | undefined;
  beforeAll(() => {
    server = initializeServer();
  });

  it('should return a list of plantes', async () => {
    const response = await supertest(server)
      .get(planetsRoute)
      .expect(200)
      .set('x-api-key', environmentVariables.API_KEY);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('results');
    expect(Array.isArray(response.body.results)).toBe(true);
  });

  it('should return a planet by id', async () => {
    const response = await supertest(server)
      .get(planetsRoute + '/1')
      .set('x-api-key', environmentVariables.API_KEY);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('climate');
    expect(response.body).toHaveProperty('gravity');
  });
});
