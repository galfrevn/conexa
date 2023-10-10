import { Planet, StarwarsListResponse } from '@conexa/schemas';
import { environmentVariables } from '@conexa/environment';

import { Searcher } from '@/components/searcher';
import { Paginator } from '@/components/paginator';
import { PlanetCard } from '@/components/planet/card';

export const dynamic = 'force-dynamic';

const getPlanets = async (searchParams: Record<string, string>) => {
  const params = new URLSearchParams(searchParams);
  const results = await fetch(`${environmentVariables.APP_URL}/api/planets?${params.toString()}`, {
    method: 'GET',
  });

  return (await results.json()) as StarwarsListResponse<Planet>;
};

export default async function PlanetsPage({ searchParams }) {
  const planets = await getPlanets(searchParams);

  return (
    <section className='px-4 py-4'>
      <header className='flex w-full items-center justify-center'>
        <h1 className='font-semibold uppercase'>Planets</h1>
      </header>
      <Searcher />

      <ul className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        {planets.results.map((movie) => (
          <PlanetCard key={movie.name} {...movie} />
        ))}
      </ul>

      <Paginator total={planets.count} />
    </section>
  );
}
