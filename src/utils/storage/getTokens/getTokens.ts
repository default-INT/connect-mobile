import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_TOKENS } from '@utils/storage/constants';
import { IUserTokens } from '@root/types/user';

export const getTokens = async () : Promise<IUserTokens | null> => {
  const tokenInfo = await AsyncStorage.getItem(USER_TOKENS);

  if (!tokenInfo) return null;

  const {
    accessToken,
    refreshToken,
    accessExpiredAt,
    refreshExpiredAt,
  } = JSON.parse(tokenInfo) as IUserTokens;

  return { accessToken, refreshToken, accessExpiredAt, refreshExpiredAt };
};
