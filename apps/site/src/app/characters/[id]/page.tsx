import { Character } from '@conexa/schemas';
import { environmentVariables } from '@conexa/environment';

import { Chip } from '@nextui-org/chip';

const getCharacter = async (id: string) => {
  const results = await fetch(`${environmentVariables.APP_URL}/api/characters/${id}`, {
    method: 'GET',
  });

  return (await results.json()) as Character;
};

export default async function SingleCharacterPage({ params: { id } }) {
  const character = await getCharacter(id);

  return (
    <section className='px-4 py-4'>
      <header className='flex flex-col space-y-3 w-full items-center justify-center lg:mt-1'>
        <Chip variant='flat' color='danger'>
          Character
        </Chip>
        <h1 className='font-semibold lg:text-2xl'>{character.name}</h1>
      </header>

      <div className='flex items-center justify-center'>
        <section>
          {/* <h2>Appearances</h2> */}
          {/* {character.films.map((film => (
            <Suspense fallback={<MovieListSkeleton />} >
            </Suspense>
          )))} */}
        </section>
      </div>
    </section>
  );
}
