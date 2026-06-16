export function setParam(params: URLSearchParams, key: string, value: string) {
  const nextParams = new URLSearchParams(params);

  if (value.trim()) {
    nextParams.set(key, value);
  } else {
    nextParams.delete(key);
  }

  return nextParams;
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export function getInventoryValue(price: number, stock: number) {
  return price * stock;
}

export function formatTitle(value: string) {
  return value.replace(/\b\w/g, (char) => char.toUpperCase());
}
