import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { storage } from '@utils/storage';
import { api } from '@root/api';
import { authController } from '@utils/auth/authController';

export const loginByGoogle = async () => {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  const userInfo = await GoogleSignin.signIn();
  const { idToken } = userInfo;

  if (!idToken) return null;

  const tokens = await api.auth.google({ idToken });

  await storage.setTokens(tokens);
  authController.notify(tokens);
};
