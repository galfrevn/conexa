import { removeUndefinedFromObject } from '@/utils';

const starwarsApi = 'https://swapi.dev/api';

export const starwarsFetch = async <T>(url: string, configuration: Record<string, any> = {}) => {
  const starwarsApiUrl = `${starwarsApi}${url}`;

  const parameters = removeUndefinedFromObject(configuration);
  const searchParams = new URLSearchParams(parameters);

  const starwarsApiRequest = `${starwarsApiUrl}?${searchParams.toString()}`;

  console.log(starwarsApiRequest);

  const response = await fetch(starwarsApiRequest);
  const results = (await response.json()) as T;

  return results;
};

export interface StarwarsListResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
