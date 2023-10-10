import Link from 'next/link';

import { Fragment } from 'react';

import { Card, CardBody } from '@nextui-org/card';

export default function Homepage() {
  return (
    <Fragment>

      <div className='mt-8 grid grid-cols-1 gap-4 px-4 lg:grid-cols-2'>
        <Card className='border-danger border' isPressable isHoverable as={Link} href='/characters'>
          <CardBody>Characters</CardBody>
        </Card>

        <Card className='border-secondary border' isPressable isHoverable as={Link} href='/movies'>
          <CardBody>Movies</CardBody>
        </Card>

        <Card className='border-success border' isPressable isHoverable as={Link} href='/starships'>
          <CardBody>Starships</CardBody>
        </Card>

        <Card className='border-warning border' isPressable isHoverable as={Link} href='/planets'>
          <CardBody>Planets</CardBody>
        </Card>
      </div>
    </Fragment>
  );
}
