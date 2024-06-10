import Geolocation, {
  SuccessCallback,
  ErrorCallback,
  GeoWatchOptions,
} from 'react-native-geolocation-service';

// eslint-disable-next-line max-len
export const watchPosition = (subscribeFn: SuccessCallback, errorFn?: ErrorCallback, options?: GeoWatchOptions) => {
  const watchId = Geolocation.watchPosition(subscribeFn, errorFn, options);

  return () => Geolocation.clearWatch(watchId);
};
