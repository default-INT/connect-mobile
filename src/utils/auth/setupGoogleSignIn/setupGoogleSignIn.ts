import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { env } from '@constants/env';

export const setupGoogleSignIn = () => {
  GoogleSignin.configure({
    iosClientId: env.IOS_CLIENT_ID,
    webClientId: env.WEB_CLIENT_ID,
    scopes: ['profile', 'email'],
  });
};
