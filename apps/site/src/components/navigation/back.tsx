'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@nextui-org/button';
import { MoveLeft } from 'lucide-react';

export function GoBackButton() {
  const router = useRouter();

  return (
    <Button isIconOnly onClick={() => router.back()} variant='flat' className='absolute'>
      <MoveLeft className='h-5 w-5' />
    </Button>
  );
}
