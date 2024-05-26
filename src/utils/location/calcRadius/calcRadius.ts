import { toRadians } from '../toRadians';

// in meters
const PER_DEGREE_LATITUDE = 111320;

export const calcRadius = (lat: number, latDelta: number, lonDelta: number) => {
  const latDistance = latDelta * PER_DEGREE_LATITUDE;
  const lonDistance = lonDelta * PER_DEGREE_LATITUDE * Math.cos(toRadians(lat));

  return Math.sqrt(latDistance ** 2 + lonDistance ** 2) / 2;
};
