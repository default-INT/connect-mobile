import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, SafeAreaView, View } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AppInput } from '@components/AppInput';
import { AppButton, buttonModifiers } from '@components/AppButton';
import { AppText } from '@components/AppText';
import { AppleIcon, GoogleIcon } from '@root/assets/icons';
import { LinkButton } from '@components/LinkButton/LinkButton';

import { styles } from './styles';

export const LoginScreen = memo(() => {
  const { t } = useTranslation('auth');

  const handleGoogleSignIn = useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const userInfo = await GoogleSignin.signIn();
      Alert.alert(`Welcome ${userInfo.user.email}`);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      Alert.alert(`Something went wrong: ${e}`);
    }
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.formContainer}>
        <AppInput
          placeholder={t('login.inputs.username.placeholder')}
        />
        <AppInput
          placeholder={t('login.inputs.password.placeholder')}
          secureTextEntry
        />
        <View style={styles.signUpContainer}>
          <AppText>{t('login.sing_up_text')}</AppText>
          <LinkButton title={t('login.buttons.sign_up')} />
        </View>
        <AppButton title={t('login.buttons.continue')} />
        <View style={styles.strokeContainer}>
          <View style={styles.stroke} />
          <AppText style={styles.strokeText}>{t('login.or_stroke')}</AppText>
          <View style={styles.stroke} />
        </View>
        <View style={styles.autoSignInContainer}>
          <AppButton
            icon={AppleIcon}
            title={t('login.buttons.login_apple')}
            style={buttonModifiers.blackButton}
            textStyle={buttonModifiers.blackButtonText}
          />
          <AppButton
            icon={GoogleIcon}
            title={t('login.buttons.login_google')}
            style={buttonModifiers.whiteButton}
            textStyle={buttonModifiers.whiteButtonText}
            onPress={handleGoogleSignIn}
          />
        </View>
      </View>
    </SafeAreaView>
  );
});

LoginScreen.displayName = 'LoginScreen';
