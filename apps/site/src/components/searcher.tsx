'use client';

import { useState, useEffect, useTransition } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useDebounce } from '@/hooks/debounce';

import { pushSearchParams } from '@/lib/params';

import { Icons } from '@/components/icons';
import { Input } from '@nextui-org/input';
import { Spinner } from '@nextui-org/spinner';

export function Searcher() {
  const [isLoading, startTransition] = useTransition();

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentQuery = searchParams.get('search') || '';
  const [clientCurrentQuery, setClientCurrentQuery] = useState(currentQuery);
  const debouncedQuery = useDebounce(clientCurrentQuery, 500);

  useEffect(() => {
    const updatedSearchParams = pushSearchParams(searchParams, [
      { search: debouncedQuery, page: 1 },
    ]);
    startTransition(() => router.push(pathname + updatedSearchParams));
  }, [debouncedQuery]);

  return (
    <Input
      radius='sm'
      className='my-4'
      placeholder='Search databank'
      endContent={
        isLoading ? <Spinner size='sm' color='default' /> : <Icons.search className='h-5 w-5' />
      }
      value={clientCurrentQuery}
      onChange={(e) => setClientCurrentQuery(e.target.value)}
    />
  );
}
