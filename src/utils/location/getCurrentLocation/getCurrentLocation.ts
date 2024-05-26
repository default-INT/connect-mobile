import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';

// NOTE: If we faced with issues on android, think about: react-native-geolocation-service
export const getCurrentLocation = async (): Promise<GeolocationResponse> => new Promise(
  (resolve, reject) => {
    Geolocation.getCurrentPosition(resolve, reject, {
      timeout: 5000,
      maximumAge: 5000,
      enableHighAccuracy: false,
    });
  },
);
