/*
This util used to create object compatible with IUrlFragment
every entry in oucome object will contains __path__
*/

import { IUrlFragment } from '../types';

type TRemap<T> = {
  [Key in keyof T]: TRemap<T[Key]> & IUrlFragment
};

export const proxyPath = <T extends object>(o: T, __path__: string[] = []): TRemap<T> => ({
  __path__,
  ...Object.entries(o).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: proxyPath(value, [...__path__, key]),
    }),
    {} as TRemap<T>,
  ),
});
