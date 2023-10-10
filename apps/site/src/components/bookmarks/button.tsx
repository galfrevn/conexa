'use client';

import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/button';

import { Bookmark } from 'lucide-react';

export function BookmarksButton({ entity }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleToggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') as string) || [];
    const alreadyBookmarked = bookmarks.find((bookmark) => bookmark.url === entity.url);

    if (alreadyBookmarked) {
      const newBookmarks = bookmarks.filter((bookmark) => bookmark.url !== entity.url);
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      setIsBookmarked(false);
    } else {
      setIsBookmarked(true);
      localStorage.setItem('bookmarks', JSON.stringify([...bookmarks, entity]));
    }
  };

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') as string) || [];
    const alreadyBookmarked = bookmarks.find((bookmark) => bookmark.url === entity.url);

    if (alreadyBookmarked) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  }, [entity]);

  return (
    <Button
      isIconOnly
      radius='lg'
      variant={isBookmarked ? 'flat' : 'light'}
      color={isBookmarked ? 'primary' : 'default'}
      onClick={handleToggleBookmark}
    >
      <Bookmark className='h-4 w-4' />
    </Button>
  );
}
