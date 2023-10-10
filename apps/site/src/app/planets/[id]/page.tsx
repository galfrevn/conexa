import { Planet } from '@conexa/schemas';
import { environmentVariables } from '@conexa/environment';

import { Chip } from '@nextui-org/chip';
import { Divider } from '@nextui-org/divider';
import { Tooltip } from '@nextui-org/tooltip';

const getPlanet = async (id: string) => {
  const results = await fetch(`${environmentVariables.APP_URL}/api/planets/${id}`, {
    method: 'GET',
  });

  return (await results.json()) as Planet;
};

export default async function SinglePlanetPage({ params: { id } }) {
  const planet = await getPlanet(id);

  return (
    <section className='px-4 py-4'>
      <header className='flex w-full flex-col items-center justify-center space-y-3 lg:mt-1'>
        <Chip variant='flat' color='warning'>
          Planet
        </Chip>
        <h1 className='text-xl font-semibold lg:text-2xl'>{planet.name}</h1>
      </header>

      <Divider orientation='horizontal' className='my-5 md:my-10' />

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
        <section>
          <h2 className='text-center font-semibold'>Planets</h2>
        </section>

        <section>
          <h2 className='text-center font-semibold'>Characters</h2>
        </section>

        <section>
          <h2 className='text-center font-semibold'>Starships</h2>
        </section>
      </div>
    </section>
  );
}
