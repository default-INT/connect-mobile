import { IUserTokens } from '@root/types/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ACCESS_EXPIRED_AT,
  ACCESS_TOKEN,
  REFRESH_EXPIRED_AT,
  REFRESH_TOKEN,
} from '@utils/storage/constants';

export const setTokens = (tokens: IUserTokens) => {
  const {
    accessToken,
    refreshToken,
    accessExpiredAt,
    refreshExpiredAt,
  } = tokens;

  const isBrokeInfo = !accessToken
    || !refreshToken
    || !accessExpiredAt
    || !refreshExpiredAt;

  if (isBrokeInfo) return;

  return Promise.all([
    AsyncStorage.setItem(ACCESS_TOKEN, accessToken),
    AsyncStorage.setItem(REFRESH_TOKEN, refreshToken),
    AsyncStorage.setItem(ACCESS_EXPIRED_AT, accessExpiredAt),
    AsyncStorage.setItem(REFRESH_EXPIRED_AT, refreshExpiredAt),
  ]);
};
