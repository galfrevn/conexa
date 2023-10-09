import { starwarsFetch, StarwarsListResponse } from '@/lib/fetch';
import { Movie } from '@conexa/schemas';
import { Router } from 'express';

export const moviesRoute = '/movies';
export const moviesRouter: Router = Router();

moviesRouter.get('/', async (request, response) => {
  const search = request.query.search;
  const page = request.query.page;

  const movies = await starwarsFetch<StarwarsListResponse<Movie>>('/films', {
    search,
    page,
  });

  response.status(200).json(movies);
});

moviesRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const movie = await starwarsFetch<Movie>(`/films/${id}`);

  response.status(200).json(movie);
});
