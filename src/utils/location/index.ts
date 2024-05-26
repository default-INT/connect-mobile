import { calcDeltas } from './calcDeltas';
import { calcRadius } from './calcRadius';
import { getCurrentLocation } from './getCurrentLocation';
import { requestLocationPermission } from './requestLocationPermission';
import { watchPosition } from './watchPosition';

export const geoLoc = {
  calcDeltas,
  calcRadius,
  getCurrentLocation,
  requestLocationPermission,
  watchPosition,
};
