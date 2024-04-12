import { makePathFragment } from '../makePathFragment';
import { IUrlFragment } from '../types';

export const relLoc = (path: IUrlFragment) => (
  path.__path__.map(makePathFragment).join('/')
);
