import Link from 'next/link';

import { Starship } from '@conexa/schemas';
import { Card, CardHeader } from '@nextui-org/card';

import { starwarsEntityId } from '@/lib/params';
import { BookmarksButton } from '@/components/bookmarks/button';

interface StarshipCardProps extends Starship {}
export function StarshipCard(props: StarshipCardProps) {
  return (
    <div className='flex items-center space-x-2'>
      <Card className='w-full' isHoverable isPressable as={Link} href={`/starships/${starwarsEntityId(props.url)}`}>
        <CardHeader>{props.name}</CardHeader>
      </Card>
      <BookmarksButton entity={props} />
    </div>
  );
}
