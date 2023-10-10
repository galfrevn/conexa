import { Application } from 'express';

import supertest from 'supertest';
import { describe, it, expect, beforeAll } from 'vitest';

import { initializeServer } from '@/app';
import { charactersRoute } from '@/controllers/characters';
import { environmentVariables } from '@conexa/environment';

describe('Characters router test battery', () => {
  let server: Application | undefined;
  beforeAll(() => {
    server = initializeServer();
  });

  it('should return a list of characters', async () => {
    const response = await supertest(server)
      .get(charactersRoute)
      .set('x-api-key', environmentVariables.API_KEY);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('results');
    expect(Array.isArray(response.body.results)).toBe(true);
  });

  it('should return a character by id', async () => {
    const response = await supertest(server)
      .get(charactersRoute + '/1')
      .set('x-api-key', environmentVariables.API_KEY);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('height');
    expect(response.body).toHaveProperty('mass');
  });
});
