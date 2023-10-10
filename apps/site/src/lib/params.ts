import { ReadonlyURLSearchParams } from 'next/navigation';

export function pushSearchParams(
  searchParams: ReadonlyURLSearchParams,
  params: Array<Record<string, string | number>>,
) {
  const parameters = new URLSearchParams(searchParams.toString());
  params.forEach((param) => {
    Object.keys(param).forEach((key) => {
      if (!Boolean(param[key])) return parameters.delete(key);
      parameters.set(key, String(param[key]).toLowerCase());
    });
  });

  return `?${parameters.toString()}`;
}

export function starwarsEntityId(url: string) {
  return url.split('/').filter(Boolean).pop();
}
