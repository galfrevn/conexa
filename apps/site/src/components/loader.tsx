'use client';

import { Spinner } from '@nextui-org/react';
import { useTransition } from 'react';

export function GlobalLoader() {
  let [transitioning, startTransition] = useTransition();

  if (!transitioning) return null;

  return <Spinner />;
}
