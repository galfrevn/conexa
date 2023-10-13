import { Starship, StarwarsListResponse } from '@conexa/schemas';
import { environmentVariables } from '@conexa/environment';

import { Searcher } from '@/components/searcher';
import { Paginator } from '@/components/paginator';
import { StarshipCard } from '@/components/starships/card';

export const revalidate = 0;

const getStarships = async (searchParams: Record<string, string>) => {
  const params = new URLSearchParams(searchParams);
  const results = await fetch(
    `${environmentVariables.APP_URL}/api/starships?${params.toString()}`,
    {
      method: 'GET',
    },
  );

  return (await results.json()) as StarwarsListResponse<Starship>;
};

export default async function CharactersPage({ searchParams }) {
  const starships = await getStarships(searchParams);

  return (
    <section className='px-4 py-4'>
      <header className='flex w-full items-center justify-center'>
        <h1 className='font-semibold uppercase'>Starships</h1>
      </header>
      <Searcher />

      <ul className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        {starships.results.map((starship) => (
          <StarshipCard key={starship.name} {...starship} />
        ))}
      </ul>

      <Paginator total={starships.count} />
    </section>
  );
}
