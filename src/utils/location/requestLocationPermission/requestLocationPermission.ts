import Geolocation from '@react-native-community/geolocation';

export const requestLocationPermission = () => new Promise(resolve => {
  Geolocation.setRNConfiguration({
    skipPermissionRequests: true,
    authorizationLevel: 'always',
  });
  Geolocation.requestAuthorization(
    () => resolve(true),
    error => {
      // eslint-disable-next-line no-console
      console.error(error);
      resolve(false);
    },
  );
});
