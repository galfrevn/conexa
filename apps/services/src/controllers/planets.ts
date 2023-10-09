import { starwarsFetch, StarwarsListResponse } from '@/lib/fetch';
import { Planet } from '@conexa/schemas';
import { Router } from 'express';

export const planetsRoute = '/planets';
export const planetsRouter: Router = Router();

planetsRouter.get('/', async (request, response) => {
  const search = request.query.search;
  const page = request.query.page;

  const planets = await starwarsFetch<StarwarsListResponse<Planet>>('/planets', {
    search,
    page,
  });

  response.status(200).json(planets);
});

planetsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const planets = await starwarsFetch<Planet>(`/planets/${id}`);

  response.status(200).json(planets);
});
