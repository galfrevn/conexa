import Link from 'next/link';

import { Card, CardHeader } from '@nextui-org/card';

import { starwarsEntityId } from '@/lib/params';
import { BookmarksButton } from '@/components/bookmarks/button';
import { Chip } from '@nextui-org/react';
import { cn } from '@/lib/tailwind';

const getEntityFromUrl = (url: string) => {
  const urlParts = url.split('/');
  const entity = urlParts[urlParts.length - 3];

  return entity;
};

// #TODO: Use the Bookmark type
export function BookmarkCard(props: any) {
  const entity = getEntityFromUrl(props.url);

  return (
    <div className='flex items-center space-x-2'>
      <Card
        className='w-full'
        isHoverable
        isPressable
        as={Link}
        href={`/characters/${starwarsEntityId(props.url)}`}
      >
        <CardHeader className='flex flex-col items-start space-y-1'>
          {props.name || props.title}
          <span className='text-xs capitalize text-neutral-600'>{entity}</span>
        </CardHeader>
      </Card>
      <BookmarksButton entity={props} />
    </div>
  );
}
