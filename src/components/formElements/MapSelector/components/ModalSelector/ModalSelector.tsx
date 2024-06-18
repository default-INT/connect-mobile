import { memo, useCallback } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import MapView, { Region } from 'react-native-maps';
import { IModalProps } from '@root/types/modal';
import { BaseModal } from '@components/BaseModal';
import { closeModal } from '@utils/modal/closeModal';
import { theme } from '@root/styles/theme';
import { FillMapPinIcon } from '@root/assets/icons';
import { AppButton } from '@components/AppButton';

import { styles } from './styles';

interface IProps extends IModalProps {
  modalTitle?: string;
  initRegion: Region;
  handleChange: (region: Region) => void;
}

export const ModalSelector = memo((props: IProps) => {
  const { modalId, initRegion, handleChange, modalTitle } = props;
  const { t } = useTranslation('common');

  const handleClose = useCallback(() => {
    closeModal(modalId);
  }, [modalId]);

  return (
    <BaseModal
      modalId={modalId}
      title={modalTitle}
      headerStyle={styles.header}
      bodyStyle={styles.body}
    >
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={initRegion} onRegionChange={handleChange} />
        <FillMapPinIcon width={54} height={54} color={theme.mainExtra} />
        <View style={styles.buttonContainer}>
          <AppButton
            title={t('apply')}
            onPress={handleClose}
          />
        </View>
      </View>
    </BaseModal>
  );
});

ModalSelector.displayName = 'ModalSelector';
