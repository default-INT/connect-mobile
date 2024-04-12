import { IUrlFragment } from '../types';
import { relLoc } from './relLoc';

export const loc = (path: IUrlFragment) => `/${relLoc(path)}`;
