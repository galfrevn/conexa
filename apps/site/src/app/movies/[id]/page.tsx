import { Movie } from '@conexa/schemas';
import { environmentVariables } from '@conexa/environment';

import { Chip } from '@nextui-org/chip';
import { Divider } from '@nextui-org/divider';
import { Tooltip } from '@nextui-org/tooltip';

const getMovie = async (id: string) => {
  const results = await fetch(`${environmentVariables.APP_URL}/api/movies/${id}`, {
    method: 'GET',
  });

  return (await results.json()) as Movie;
};

export default async function SingleMoviePage({ params: { id } }) {
  const movie = await getMovie(id);

  return (
    <section className='px-4 py-4'>
      <header className='flex w-full flex-col items-center justify-center space-y-3 lg:mt-1'>
        <Chip variant='flat' color='secondary'>
          Movie
        </Chip>
        <h1 className='text-xl font-semibold lg:text-2xl'>{movie.title}</h1>
      </header>

      <p className='text-foreground/60 my-5 text-center'>{movie.opening_crawl}</p>

      <div className='text-small flex h-auto w-full flex-col items-center justify-center space-y-2 md:flex-row md:space-x-6 md:space-y-0'>
        
        <div className='flex flex-col items-center space-y-2'>
          <p>Director</p>
          <Chip variant='flat'>
            <p>{movie.director}</p>
          </Chip>
        </div>

        <div className='flex flex-col items-center space-y-2'>
          <p>Producer</p>
          <Chip variant='flat'>
            <p>{movie.producer}</p>
          </Chip>
        </div>

        <div className='flex flex-col items-center space-y-2'>
          <p>Release date</p>
          <Chip variant='flat'>
            <p>{movie.release_date}</p>
          </Chip>
        </div>
      </div>
    </section>
  );
}
