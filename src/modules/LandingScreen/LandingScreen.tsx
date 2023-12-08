import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

export const LandingScreen = memo(() => {
  const { t } = useTranslation('landing');

  return (
    <View>
      <Text>{t('test')}</Text>
    </View>
  );
});

LandingScreen.displayName = 'LandingScreen';
