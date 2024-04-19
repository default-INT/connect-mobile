import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_MOCK } from '@utils/storage/constants';

export const getUserMock = async () => {
  const user = await AsyncStorage.getItem(USER_MOCK);

  if (!user) return null;

  return JSON.parse(user);
};
