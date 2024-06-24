import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { AppText } from '@components/AppText';
import { SadIcon } from '@root/assets/icons';
import { theme } from '@root/styles/theme';
import { styles } from './styles';

export const NoParticipantsPlaceholder = memo(() => {
  const { t } = useTranslation('app', { keyPrefix: 'event_map.event_info' });

  return (
    <View style={styles.container}>
      <SadIcon width={100} height={100} color={theme.neutralTertiary} />
      <AppText style={styles.text}>{t('no_data')}</AppText>
    </View>
  );
});

NoParticipantsPlaceholder.displayName = 'NoParticipantsPlaceholder';
