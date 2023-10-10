import { Starship } from '@conexa/schemas';
import { environmentVariables } from '@conexa/environment';

import { Chip } from '@nextui-org/chip';
import { AttributeCard } from '@/components/attribute';

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

      <p className='text-foreground/60 my-5 text-center'>{starship.manufacturer}</p>

      <div className='text-small flex w-full flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
        <AttributeCard title='Model' value={starship.model} />
        <AttributeCard title='Cargo capatity' value={starship.cargo_capacity} />
        <AttributeCard title='Max atmosphering speed' value={starship.max_atmosphering_speed} />
        <AttributeCard title='Hypredrive rating' value={starship.hyperdrive_rating} />
      </div>
    </section>
  );
}
