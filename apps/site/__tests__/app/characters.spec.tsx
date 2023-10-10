import { render, screen, act } from '../utils';
import { describe, it, expect, vi } from 'vitest';

import charactersMock from '../../__mocks__/characters.json';
import CharactersPage from '@/app/characters/page';

// @ts-ignore
global.fetch = async (url, options) => ({
  json: async () => ({
    count: 2,
    results: charactersMock,
  }),
});

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    query: {},
    push: vi.fn(),
  }),
  usePathname: () => '/movies',
  useSearchParams: () => ({ get: vi.fn() }),
}));

vi.mock('@conexa/environment', () => ({
  environmentVariables: {
    APP_URL: 'http://localhost:3000',
  },
}));

describe('Characters page test battery', () => {
  it('should render the characters page and list some movies', async () => {
    await act(async () => {
      render(await CharactersPage({ searchParams: {} }));
    });

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('C-3PO')).toBeInTheDocument();
    expect(screen.getByText('R2-D2')).toBeInTheDocument();
  });
});
