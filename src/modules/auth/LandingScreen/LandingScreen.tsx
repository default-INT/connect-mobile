import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppText } from '@components/AppText';
import { AppButton, buttonModifiers } from '@components/AppButton';
import { r } from '@constants/routes';
import { gen } from '@utils/router/gen';
import { cn } from '@utils/styleUtils/concat';

import { styles } from './styles';

export const LandingScreen = memo(() => {
  const { t } = useTranslation('auth');
  const { navigate } = useNavigation<any>();

  const handleLogin = useCallback(() => {
    navigate(gen.loc(r.auth.login));
  }, [navigate]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.logo}>
          <AppText style={styles.logoText}>{t('common:app_name')}</AppText>
        </View>
        <View style={styles.textContainer}>
          <AppText style={styles.title}>{t('landing.title')}</AppText>
          <AppText style={styles.description}>{t('landing.description')}</AppText>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title={t('landing.buttons.log_in')}
          onPress={handleLogin}
          style={cn(
            buttonModifiers.secondaryButton,
            buttonModifiers.buttonFlex,
          )}
          textStyle={buttonModifiers.primaryText}
        />
        <AppButton
          title={t('landing.buttons.sing_up')}
          style={buttonModifiers.buttonFlex}
        />
      </View>
    </SafeAreaView>
  );
});

LandingScreen.displayName = 'LandingScreen';
