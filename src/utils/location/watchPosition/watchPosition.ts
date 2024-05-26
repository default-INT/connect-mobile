import Geolocation, {
  GeolocationError,
  GeolocationOptions,
  GeolocationResponse,
} from '@react-native-community/geolocation';

type TSubFn = (res: GeolocationResponse) => void;
type TErrorFn = (error: GeolocationError) => void;

// eslint-disable-next-line max-len
export const watchPosition = (subscribeFn: TSubFn, errorFn?: TErrorFn, options?: GeolocationOptions) => {
  const watchId = Geolocation.watchPosition(subscribeFn, errorFn, options);

  return () => Geolocation.clearWatch(watchId);
};
