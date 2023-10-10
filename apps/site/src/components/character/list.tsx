import { Fragment } from 'react';

import { Skeleton } from '@nextui-org/skeleton';
import { MovieCard } from '@/components/movie/card';

import { environmentVariables } from '@conexa/environment';
import { Movie, StarwarsListResponse } from '@conexa/schemas';

const getMovies = async () => {
  const results = await fetch(`${environmentVariables.APP_URL}/api/movies`, { method: 'GET' });
  return (await results.json()) as StarwarsListResponse<Movie>;
};

export async function MovieList() {
  const movies = await getMovies();

  return (
    <ul className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
      {movies.results.map((character) => (
        <MovieCard key={character.title} {...character} />
      ))}
    </ul>
  );
}

export function MovieListSkeleton() {
  return (
    <Fragment>
      <Skeleton />
    </Fragment>
  );
}
