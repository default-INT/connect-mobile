import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ACCESS_EXPIRED_AT,
  ACCESS_TOKEN,
  REFRESH_EXPIRED_AT,
  REFRESH_TOKEN,
} from '@utils/storage/constants';
import { IUserTokens } from '@root/types/user';

export const getTokens = async () : Promise<IUserTokens> => {
  const tokenInfo = await Promise.all([
    AsyncStorage.getItem(ACCESS_TOKEN),
    AsyncStorage.getItem(REFRESH_TOKEN),
    AsyncStorage.getItem(ACCESS_EXPIRED_AT),
    AsyncStorage.getItem(REFRESH_EXPIRED_AT),
  ]);

  const [
    accessToken,
    refreshToken,
    accessExpiredAt,
    refreshExpiredAt,
  ] = tokenInfo;

  return { accessToken, refreshToken, accessExpiredAt, refreshExpiredAt };
};
