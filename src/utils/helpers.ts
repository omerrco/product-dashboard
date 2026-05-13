export function setParam(params: URLSearchParams, key: string, value: string) {
  const nextParams = new URLSearchParams(params);

  if (value.trim()) {
    nextParams.set(key, value);
  } else {
    nextParams.delete(key);
  }

  return nextParams;
}
