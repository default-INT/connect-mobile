import { toRadians } from '@utils/location/toRadians';

// in meters
const PER_DEGREE_LATITUDE = 111320;

export const calcDeltas = (lat: number, radius: number) => {
  const latitudeDelta = radius / PER_DEGREE_LATITUDE;
  const longitudeDelta = radius / (PER_DEGREE_LATITUDE * Math.cos(toRadians(lat)));

  return { latitudeDelta, longitudeDelta };
};
