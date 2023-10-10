import { Application } from 'express';

import supertest from 'supertest';
import { describe, it, expect, beforeAll } from 'vitest';

import { initializeServer } from '@/app';
import { starshipsRoute } from '@/controllers/starships';
import { environmentVariables } from '@conexa/environment';

describe('Starships router test battery', () => {
  let server: Application | undefined;
  beforeAll(() => {
    server = initializeServer();
  });

  it('should return a list of starships', async () => {
    const response = await supertest(server)
      .get(starshipsRoute)
      .set('x-api-key', environmentVariables.API_KEY);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('results');
    expect(Array.isArray(response.body.results)).toBe(true);
  });

  it('should return a starship by id', async () => {
    const response = await supertest(server)
      .get(starshipsRoute + '/2')
      .set('x-api-key', environmentVariables.API_KEY);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('model');
    expect(response.body).toHaveProperty('manufacturer');
  });
});
