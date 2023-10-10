'use client';

import { useEffect, useState } from 'react';
import { Bookmark } from '@conexa/schemas';

import BookmarksPageSkeleton from '@/app/bookmarks/loading';
import { BookmarkCard } from '@/components/bookmarks/card';


export default function CharactersPage() {
  const [bookmarks, setBookmarks] = useState<null | Bookmark[]>(null);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setBookmarks(bookmarks);
  }, []);

  if (bookmarks === null) return <BookmarksPageSkeleton />;

  return (
    <section className='px-4 py-4'>
      <header className='flex w-full items-center justify-center'>
        <h1 className='font-semibold uppercase'>Bookmarks</h1>
      </header>

      <ul className='mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2'>
        {bookmarks?.map((bookmark) => <BookmarkCard key={bookmark.url} {...bookmark} />)}
      </ul>
    </section>
  );
}
