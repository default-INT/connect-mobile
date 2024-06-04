import { memo, useCallback } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { AppText } from '@components/AppText';
import { CircleAddIcon } from '@root/assets/icons';
import { IconButton } from '@components/IconButton';
import { s } from '@utils/scaleUtils/scale';
import { theme } from '@root/styles/theme';
import { showModal } from '@utils/modal/showModal';
import { AddEventModal } from '../AddEventModal';

import { styles } from './styles';

const iconProps = {
  width: s.width(24),
  height: s.height(24),
  color: theme.primaryRegular,
};

export const Header = memo(() => {
  const { t } = useTranslation('common');

  const handleAddPress = useCallback(() => {
    showModal(props => <AddEventModal {...props} />, { baseHeight: 600 });
  }, []);

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{t('app_name')}</AppText>
      <IconButton
        icon={CircleAddIcon}
        iconProps={iconProps}
        onPress={handleAddPress}
      />
    </View>
  );
});

Header.displayName = 'Header';
