import Link from 'next/link';

import { Character } from '@conexa/schemas';
import { Card, CardHeader } from '@nextui-org/card';

import { starwarsEntityId } from '@/lib/params';
import { BookmarksButton } from '@/components/bookmarks/button';

interface CharacterCardProps extends Character {}
export function CharacterCard(props: CharacterCardProps) {
  return (
    <div className='flex items-center space-x-2' >
      <Card className='w-full' isHoverable isPressable as={Link} href={`/characters/${starwarsEntityId(props.url)}`}>
        <CardHeader>{props.name}</CardHeader>
      </Card>
      <BookmarksButton entity={props} />
    </div>
  );
}
