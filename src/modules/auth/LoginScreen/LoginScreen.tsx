import { memo, useCallback, useState } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { AppInput } from '@components/formElements/AppInput';
import { AppButton, buttonModifiers } from '@components/AppButton';
import { AppText } from '@components/AppText';
import { AppleIcon, GoogleIcon } from '@root/assets/icons';
import { LinkButton } from '@components/LinkButton';
import { loginByGoogle } from './utils/loginByGoogle';

import { styles } from './styles';

export const LoginScreen = memo(() => {
  const { t } = useTranslation('auth');
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = useCallback(async () => {
    try {
      setIsLoading(true);
      await loginByGoogle();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      Alert.alert(`Something went wrong: ${e}`);
    }
    setIsLoading(false);
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
        <AppButton disabled={isLoading} title={t('login.buttons.continue')} />
        <View style={styles.strokeContainer}>
          <View style={styles.stroke} />
          <AppText style={styles.strokeText}>{t('login.or_stroke')}</AppText>
          <View style={styles.stroke} />
        </View>
        <View style={styles.autoSignInContainer}>
          <AppButton
            icon={AppleIcon}
            disabled={isLoading}
            title={t('login.buttons.login_apple')}
            style={buttonModifiers.blackButton}
            textStyle={buttonModifiers.blackButtonText}
          />
          <AppButton
            icon={GoogleIcon}
            disabled={isLoading}
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
