import { starwarsFetch, StarwarsListResponse } from '@/lib/fetch';
import { Starship } from '@conexa/schemas';
import { Router } from 'express';

export const starshipsRoute = '/starships';
export const starshipsRouter: Router = Router();

starshipsRouter.get('/', async (request, response) => {
  const search = request.query.search;
  const page = request.query.page;

  const starships = await starwarsFetch<StarwarsListResponse<Starship>>('/starships', {
    search,
    page,
  });

  response.status(200).json(starships);
});

starshipsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const starship = await starwarsFetch<Starship>(`/starships/${id}`);

  response.status(200).json(starship);
});
