import { Application } from 'express';

import supertest from 'supertest';
import { describe, it, expect, beforeAll } from 'vitest';

import { initializeServer } from '@/app';
import { moviesRoute } from '@/controllers/movies';

describe('Movies router test battery', () => {

  let server: Application | undefined;
  beforeAll(() => { server = initializeServer()});

  it('should return a list of movies', async () => {
    const response = await supertest(server).get(moviesRoute).expect(200);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('results');
    expect(Array.isArray(response.body.results)).toBe(true);
  });

  it('should return a movie by id', async () => {
    const response = await supertest(server).get(moviesRoute + '/1');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('title');
    expect(response.body).toHaveProperty('director');
    expect(response.body).toHaveProperty('characters');
  });
});
