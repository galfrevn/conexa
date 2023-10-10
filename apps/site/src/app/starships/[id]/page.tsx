import { Starship } from '@conexa/schemas';
import { environmentVariables } from '@conexa/environment';

import { Chip } from '@nextui-org/chip';
import { Divider } from '@nextui-org/divider';
import { Tooltip } from '@nextui-org/tooltip';

const getStarship = async (id: string) => {
  const results = await fetch(`${environmentVariables.APP_URL}/api/starships/${id}`, {
    method: 'GET',
  });

  return (await results.json()) as Starship;
};

export default async function SingleStarshipPage({ params: { id } }) {
  const starship = await getStarship(id);

  return (
    <section className='px-4 py-4'>
      <header className='flex w-full flex-col items-center justify-center space-y-3 lg:mt-1'>
        <Chip variant='flat' color='success'>
          Starship
        </Chip>
        <h1 className='text-xl font-semibold lg:text-2xl'>{starship.name}</h1>
      </header>

      <p className='text-foreground/60 my-5 text-center'>{starship.consumables}</p>

      <div className='text-small flex h-auto w-full flex-col items-center justify-center space-y-2 md:flex-row md:space-x-4 md:space-y-0'>
        <Tooltip showArrow content='Director'>
          <Chip variant='flat'>
            <p>{starship.manufacturer}</p>
          </Chip>
        </Tooltip>

        <Tooltip showArrow content='Producer'>
          <Chip variant='flat'>
            <p>{starship.cargo_capacity}</p>
          </Chip>
        </Tooltip>

        <Tooltip showArrow content='Release date'>
          <Chip variant='flat'>
            <p>{starship.max_atmosphering_speed}</p>
          </Chip>
        </Tooltip>
      </div>

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
