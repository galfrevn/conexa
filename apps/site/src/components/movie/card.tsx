import Link from 'next/link';

import { Movie } from '@conexa/schemas';
import { Card, CardHeader } from '@nextui-org/card';

import { starwarsEntityId } from '@/lib/params';
import { BookmarksButton } from '@/components/bookmarks/button';

interface MovieCardProps extends Movie {}
export function MovieCard(props: MovieCardProps) {
  return (
    <div className='flex items-center space-x-2'>
      <Card className='w-full' isHoverable isPressable as={Link} href={`/movies/${starwarsEntityId(props.url)}`}>
        <CardHeader>{props.title}</CardHeader>
      </Card>
      <BookmarksButton entity={props} />
    </div>
  );
}
