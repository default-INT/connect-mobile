import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ACCESS_EXPIRED_AT,
  ACCESS_TOKEN,
  REFRESH_EXPIRED_AT,
  REFRESH_TOKEN,
} from '@utils/storage/constants';

export const removeTokens = () => Promise.all([
  AsyncStorage.removeItem(ACCESS_TOKEN),
  AsyncStorage.removeItem(REFRESH_TOKEN),
  AsyncStorage.removeItem(ACCESS_EXPIRED_AT),
  AsyncStorage.removeItem(REFRESH_EXPIRED_AT),
]);
