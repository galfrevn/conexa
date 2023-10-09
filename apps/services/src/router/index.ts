import { Router } from 'express';

import { authenticationMiddleware } from '@/middlewares/authentication';

import { charactersRoute, charactersRouter } from '@/controllers/characters';
import { moviesRoute, moviesRouter } from '@/controllers/movies';
import { planetsRoute, planetsRouter } from '@/controllers/planets';
import { starshipsRoute, starshipsRouter } from '@/controllers/starships';

export const serverRouter: Router = Router();

serverRouter.use(authenticationMiddleware);

serverRouter.use(charactersRoute, charactersRouter);
serverRouter.use(moviesRoute, moviesRouter);
serverRouter.use(planetsRoute, planetsRouter);
serverRouter.use(starshipsRoute, starshipsRouter);
