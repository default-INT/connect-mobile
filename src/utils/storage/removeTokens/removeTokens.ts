import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_TOKENS } from '@utils/storage/constants';

export const removeTokens = () => AsyncStorage.removeItem(USER_TOKENS);
