import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_MOCK } from '@utils/storage/constants';

export const removeUserMock = () => AsyncStorage.removeItem(USER_MOCK);
