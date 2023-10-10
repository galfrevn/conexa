import { Skeleton } from '@nextui-org/skeleton';

export default async function CharactersPageSkeleton() {
  return (
    <section className='px-4 py-4'>
      <header className='flex w-full items-center justify-center'>
        <h1 className='font-semibold uppercase'>Characters</h1>
      </header>
      <Skeleton className='my-4 h-10 w-full rounded-lg' />

      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        {[...Array(10)].map((_, index) => (
          <Skeleton key={index} className='h-16 w-full rounded-lg' />
        ))}
      </div>
    </section>
  );
}
