import { Locale } from '@root/types/locale';
import { Platform } from 'react-native';

export const appConfig = {
  defaultLanguage: Locale.En,
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
};
