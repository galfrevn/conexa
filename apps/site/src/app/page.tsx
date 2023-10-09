import { Fragment } from 'react';

import { StarwarsCard } from '@/components/card';

export default function Home() {
  return (
    <Fragment>
      <div className='grid grid-cols-1 gap-20 px-4 lg:grid-cols-2'>
        <StarwarsCard />
      </div>
    </Fragment>
  );
}
