import { removeUndefinedFromObject } from '@/utils';
export { type StarwarsListResponse } from '@conexa/schemas';

const starwarsApi = 'https://swapi.dev/api';

export const starwarsFetch = async <T>(url: string, configuration: Record<string, any> = {}) => {
  const starwarsApiUrl = `${starwarsApi}${url}`;

  const parameters = removeUndefinedFromObject(configuration);
  const searchParams = new URLSearchParams(parameters);

  const starwarsApiRequest = `${starwarsApiUrl}?${searchParams.toString()}`;

  const response = await fetch(starwarsApiRequest);
  const results = (await response.json()) as T;

  return results;
};
