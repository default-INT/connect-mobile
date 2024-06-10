import Geolocation, { GeoPosition } from 'react-native-geolocation-service';

// NOTE: If we faced with issues on android, think about: react-native-geolocation-service
export const getCurrentLocation = async (): Promise<GeoPosition> => new Promise(
  (resolve, reject) => {
    Geolocation.getCurrentPosition(resolve, reject, {
      timeout: 2000,
      maximumAge: 10000,
      enableHighAccuracy: false,
    });
  },
);
