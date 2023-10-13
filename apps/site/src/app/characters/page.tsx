import { Character, StarwarsListResponse } from '@conexa/schemas';
import { environmentVariables } from '@conexa/environment';

import { Searcher } from '@/components/searcher';
import { CharacterCard } from '@/components/character/card';
import { Paginator } from '@/components/paginator';

export const revalidate = 0;

const getCharacters = async (searchParams: Record<string, string>) => {
  const params = new URLSearchParams(searchParams);
  const results = await fetch(
    `${environmentVariables.APP_URL}/api/characters?${params.toString()}`,
    { method: 'GET' },
  );

  return (await results.json()) as StarwarsListResponse<Character>;
};

export default async function CharactersPage({ searchParams }) {
  const characters = await getCharacters(searchParams);

  return (
    <section className='px-4 py-4'>
      <header className='flex w-full items-center justify-center'>
        <h1 className='font-semibold uppercase'>Characters</h1>
      </header>
      <Searcher />

      <ul className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        {characters.results.map((character) => (
          <CharacterCard key={character.name} {...character} />
        ))}
      </ul>

      <Paginator total={characters.count} />
    </section>
  );
}
