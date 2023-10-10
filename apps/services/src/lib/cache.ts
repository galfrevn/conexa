import expressCache from 'cache-express';

export const cache = expressCache({
  timeOut: 6000,
});
