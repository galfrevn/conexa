import Link from 'next/link';

import { Planet } from '@conexa/schemas';
import { Card, CardHeader } from '@nextui-org/card';

import { starwarsEntityId } from '@/lib/params';
import { BookmarksButton } from '@/components/bookmarks/button';

interface PlanetCardProps extends Planet {}
export function PlanetCard(props: PlanetCardProps) {
  return (
    <div className='flex items-center space-x-2'>
      <Card className='w-full' isHoverable isPressable as={Link} href={`/planets/${starwarsEntityId(props.url)}`}>
        <CardHeader>{props.name}</CardHeader>
      </Card>
      <BookmarksButton entity={props} />
    </div>
  );
}
