import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { getUserFromGoogle } from '@utils/auth/getUserFromGoogle';
import { storage } from '@utils/storage';

export const loginByGoogle = async () => {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  const userInfo = await GoogleSignin.signIn();
  const { idToken } = userInfo;

  storage.setTokens({
    accessToken: idToken,
    refreshToken: idToken,
    accessExpiredAt: idToken,
    refreshExpiredAt: idToken,
  });

  return getUserFromGoogle(userInfo);
};
