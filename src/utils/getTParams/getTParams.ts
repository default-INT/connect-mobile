import { TOptions } from 'i18next/typescript/options';

export const getTParams = (value: string | { key: string }): [string, TOptions?] => {
  if (typeof value === 'string') return [value];

  const { key, ...rest } = value;

  if (!key) {
    return [Object.values(value)[0]];
  }

  return [key, rest as TOptions];
};
