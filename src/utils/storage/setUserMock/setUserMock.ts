import { IUserState } from '@root/types/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_MOCK } from '@utils/storage/constants';

export const setUserMock = (userState: IUserState) => {
  const userJson = JSON.stringify(userState);

  return AsyncStorage.setItem(USER_MOCK, userJson);
};
