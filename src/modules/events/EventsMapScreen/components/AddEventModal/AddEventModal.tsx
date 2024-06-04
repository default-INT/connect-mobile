import { memo } from 'react';
import { ScrollView } from 'react-native';
import { AppText } from '@components/AppText';
import { BaseModal } from '@components/BaseModal';
import { IModalProps } from '@root/types/modal';

interface IProps extends IModalProps {

}

export const AddEventModal = memo((props: IProps) => {
  const { modalId } = props;

  return (
    <BaseModal
      modalId={modalId}
      title='Add Event'
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppText>Some Text</AppText>
      </ScrollView>
    </BaseModal>
  );
});

AddEventModal.displayName = 'AddEventModal';
