import { Character } from '@conexa/schemas';
import { environmentVariables } from '@conexa/environment';

import { Chip } from '@nextui-org/chip';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { AttributeCard } from '@/components/attribute';

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
      <header className='flex w-full flex-col items-center justify-center space-y-3 lg:mt-1'>
        <Chip variant='flat' color='danger'>
          Character
        </Chip>
        <h1 className='text-xl font-semibold lg:text-2xl'>{character.name}</h1>
      </header>

      <Divider className='my-4' />
      <p className='font-semiblold mb-4  text-center text-neutral-400'>Attributes</p>
      {/* <h3 className='mb-4 mt-8 text-center text-lg font-semibold'>Attributes</h3> */}
      <div className='text-small flex h-auto w-full flex-col items-center justify-center space-y-2 md:flex-row md:space-x-6 md:space-y-0'>
        <AttributeCard title='Height' value={character.height + 'kg'} />
        <AttributeCard title='Mass' value={character.mass} />
        <AttributeCard title='Hair color' value={character.hair_color} />
        <AttributeCard title='Skin color' value={character.skin_color} />
        <AttributeCard title='Birth year' value={character.birth_year} />
        <AttributeCard title='Gender' value={character.gender} />
      </div>
    </section>
  );
}
