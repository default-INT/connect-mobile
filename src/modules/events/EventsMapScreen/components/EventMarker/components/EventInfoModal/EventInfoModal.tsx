import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { IModalProps } from '@root/types/modal';
import { IEventDto } from '@root/api/events/dto';
import { BaseModal } from '@components/BaseModal';
import { AppText } from '@components/AppText';
import { closeModal } from '@utils/modal/closeModal';
import { buttonModifiers } from '@components/AppButton';
import { getUser } from '@root/selectors/getUser';
import { TrashIcon } from '@root/assets/icons';
import { showModal } from '@utils/modal/showModal';
import { JoinModal } from '../JoinModal';
import { OwnerInfo } from '../OwnerInfo';
import { getMetadata } from '../utils/getMetadata';
import { TooltipItem } from '../TooltipItem';
import { NoParticipantsPlaceholder } from '../NoParticipantsPlaceholder';

import { styles } from './styles';

interface IProps extends IModalProps {
  event: IEventDto;
}

export const EventInfoModal = memo((props: IProps) => {
  const { event, modalId } = props;
  const { owner, description, ownerId } = event;
  const { t } = useTranslation();
  const { id } = useSelector(getUser);
  const isOwner = id === ownerId;
  const eventMetadata = useMemo(() => getMetadata(event, t), [event, t]);

  const handleConfirmPress = useCallback(() => {
    if (isOwner) return;
    showModal(JoinModal);
  }, [isOwner]);

  const buttons = useMemo(() => [
    {
      title: t('common:buttons.close'),
      style: buttonModifiers.secondaryButton,
      textStyle: buttonModifiers.primaryText,
      onPress: () => closeModal(modalId),
    },
    {
      style: isOwner && buttonModifiers.updateButton,
      title: t(`common:buttons.${isOwner ? 'edit' : 'join'}`),
      onPress: handleConfirmPress,
    },
  ], [t, modalId, isOwner, handleConfirmPress]);

  return (
    <BaseModal
      modalId={modalId}
      title={event.title}
      rightIcon={isOwner ? TrashIcon : null}
      buttons={buttons}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {owner && <OwnerInfo owner={owner} />}
          <View style={styles.metadata}>
            {eventMetadata.map((item, idx) => item && (
              <TooltipItem key={`${idx + item.title}`} isPrimary {...item} />
            ))}
          </View>
          {description && <AppText style={styles.description}>{event.description}</AppText>}
          <View style={styles.participantsContainer}>
            <AppText style={styles.participantsTitle}>
              {t('app:event_map.event_info.participants')}
            </AppText>
          </View>
          <NoParticipantsPlaceholder />
        </View>
      </ScrollView>
    </BaseModal>
  );
});

EventInfoModal.displayName = 'EventInfoModal';
