export function removeUndefinedFromObject(object: any) {
  const result = {};

  for (const key in object) {
    if (object[key] !== undefined) {
      result[key] = object[key];
    }
  }

  return result;
}
