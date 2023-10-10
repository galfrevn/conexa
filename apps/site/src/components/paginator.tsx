'use client';

import { useCallback, useState, useMemo, useTransition } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import { pushSearchParams } from '@/lib/params';

import { Pagination } from '@nextui-org/pagination';
import { Spinner } from '@nextui-org/spinner';

interface ProductPaginatorProps {
  total: number;
}

export function Paginator({ total }: ProductPaginatorProps) {
  let [loading, startTransition] = useTransition();

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentPage = Number(searchParams.get('page')) || 1;
  const currentLimit = Number(searchParams.get('limit')) || 10;

  const [clientCurrentStep, setClientCurrentStep] = useState(currentPage);

  const totalPages = useMemo(() => Math.ceil(total / currentLimit), [total]);

  const updatedSearchParams = useCallback(
    (page: number) => pushSearchParams(searchParams, [{ page }]),
    [searchParams],
  );

  const handleChangePage = useCallback(
    (page: number) => {
      startTransition(() => {
        setClientCurrentStep(page);
        router.push(pathname + updatedSearchParams(page));
      });
    },
    [currentPage, pathname],
  );

  return (
    <div className='mt-4 flex items-center space-x-4'>
      <Pagination
        radius='sm'
        disableCursorAnimation
        variant='bordered'
        classNames={{
          cursor: 'text-black font-semibold',
        }}
        total={totalPages}
        page={clientCurrentStep}
        onChange={handleChangePage}
      />
      {loading && <Spinner size='sm' />}
    </div>
  );
}
