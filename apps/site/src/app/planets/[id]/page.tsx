import { Planet } from '@conexa/schemas';
import { environmentVariables } from '@conexa/environment';

import { Chip } from '@nextui-org/chip';
import { Divider } from '@nextui-org/divider';
import { AttributeCard } from '@/components/attribute';

const getPlanet = async (id: string) => {
  const results = await fetch(`${environmentVariables.APP_URL}/api/planets/${id}`, {
    method: 'GET',
  });

  return (await results.json()) as Planet;
};

export default async function SinglePlanetPage({ params: { id } }) {
  const planet = await getPlanet(id);

  console.log(planet);

  return (
    <section className='px-4 py-4'>
      <header className='flex w-full flex-col items-center justify-center space-y-3 lg:mt-1'>
        <Chip variant='flat' color='warning'>
          Planet
        </Chip>
        <h1 className='text-xl font-semibold lg:text-2xl'>Planet {planet.name}</h1>
      </header>

      <Divider className='my-4' />
      <p className='font-semiblold mb-4 text-center text-neutral-400'>Attributes</p>

      <div className='text-small flex w-full flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
        <AttributeCard title='Diameter' value={planet.diameter} />
        <AttributeCard title='Climate' value={planet.climate} />
        <AttributeCard title='Terrain' value={planet.terrain} />
        <AttributeCard title='Population' value={planet.population} />
      </div>
    </section>
  );
}
