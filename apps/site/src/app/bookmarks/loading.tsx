import { Skeleton } from '@nextui-org/skeleton';

export default async function BookmarksPageSkeleton() {
  return (
    <section className='px-4 py-4'>
      <header className='flex w-full items-center justify-center'>
        <h1 className='font-semibold uppercase'>Bookmarks</h1>
      </header>

      <div className='grid grid-cols-1 mt-4 gap-4 lg:grid-cols-2'>
        {[...Array(4)].map((_, index) => (
          <Skeleton key={index} className='h-12 w-full rounded-lg' />
        ))}
      </div>
    </section>
  );
}
