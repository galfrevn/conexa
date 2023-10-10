import { Movie, StarwarsListResponse } from '@conexa/schemas';
import { environmentVariables } from '@conexa/environment';

import { Searcher } from '@/components/searcher';
import { Paginator } from '@/components/paginator';
import { MovieCard } from '@/components/movie/card';

const getMovies = async (searchParams: Record<string, string>) => {
  const params = new URLSearchParams(searchParams);
  const results = await fetch(`${environmentVariables.APP_URL}/api/movies?${params.toString()}`, {
    method: 'GET',
  });

  return (await results.json()) as StarwarsListResponse<Movie>;
};

export default async function CharactersPage({ searchParams }) {
  const movies = await getMovies(searchParams);

  return (
    <section className='px-4 py-4'>
      <header className='flex w-full items-center justify-center'>
        <h1 className='font-semibold uppercase'>Movies</h1>
      </header>
      <Searcher />

      <ul className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        {movies.results.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </ul>

      <Paginator total={movies.count} />
    </section>
  );
}
