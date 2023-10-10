import { render, screen, act } from '../utils';
import { describe, it, expect, vi } from 'vitest';

import moviesMock from '../../__mocks__/movies.json'

import MoviesPage from '@/app/movies/page';

// @ts-ignore
global.fetch = async (url, options) => ({
  json: async () => ({
    count: 2,
    results: moviesMock,
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

describe('Movies page test battery', () => {
  it('should render the movies page and list some movies', async () => {
    await act(async () => {
      render(await MoviesPage({ searchParams: {} }));
    });

    expect(screen.getByText('Movies')).toBeInTheDocument();
    expect(screen.getByText('A New Hope')).toBeInTheDocument();
    expect(screen.getByText('The Empire Strikes Back')).toBeInTheDocument();
  });
});
