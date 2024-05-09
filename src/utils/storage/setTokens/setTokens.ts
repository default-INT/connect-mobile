import { IUserTokens } from '@root/types/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_TOKENS } from '@utils/storage/constants';

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

  return AsyncStorage.setItem(USER_TOKENS, JSON.stringify(tokens));
};
