import { Router } from 'express';
import { Character } from '@conexa/schemas';

import { cache } from '@/lib/cache';
import { starwarsFetch, StarwarsListResponse } from '@/lib/fetch';

export const charactersRoute = '/characters';
export const charactersRouter: Router = Router();

charactersRouter.get('/', cache, async (request, response) => {
  const search = request.query.search;
  const page = request.query.page;

  const characters = await starwarsFetch<StarwarsListResponse<Character>>('/people', {
    search,
    page,
  });

  response.status(200).json(characters);
});

charactersRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const character = await starwarsFetch<Character>(`/people/${id}`);

  response.status(200).json(character);
});
