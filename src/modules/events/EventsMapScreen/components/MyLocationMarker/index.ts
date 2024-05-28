import { Platform } from 'react-native';
import { MyLocationMarkerIos } from './MyLocationMarker.ios';
import { MyLocationMarkerAndroid } from './MyLocationMarker.android';

export const MyLocationMarker = Platform.select({
  ios: MyLocationMarkerIos,
  android: MyLocationMarkerAndroid,
});
