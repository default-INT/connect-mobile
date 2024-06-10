import Geolocation from 'react-native-geolocation-service';
import { appConfig } from '@constants/appConfig';
import { PermissionsAndroid } from 'react-native';

export const requestLocationPermission = async () => {
  if (appConfig.isAndroid) {
    return PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
  }
  const result = await Geolocation.requestAuthorization('whenInUse');

  return result === 'granted';
};
