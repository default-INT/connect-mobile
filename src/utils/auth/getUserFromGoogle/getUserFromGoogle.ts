import { User } from '@react-native-google-signin/google-signin';
import { IBaseUserInfo } from '@root/types/user';

export const getUserFromGoogle = ({ user }: User): IBaseUserInfo => ({
  id: Number(user.id),
  avatar: user.photo,
  friendlyName: user.name,
  lastName: user.givenName || '',
  firstName: user.givenName || 'Unknown',
  roles: [],
});
