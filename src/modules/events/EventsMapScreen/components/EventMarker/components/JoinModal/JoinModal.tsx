import { memo } from 'react';
import { View } from 'react-native';
import { IModalProps } from '@root/types/modal';
import { BaseModal } from '@components/BaseModal';
import { AppText } from '@components/AppText';
import { TextArea } from '@components/formElements/TextArea';

import { styles } from './styles';

interface IProps extends IModalProps {

}

export const JoinModal = memo((props: IProps) => {
  const { modalId } = props;

  return (
    <BaseModal
      modalId={modalId}
      title='Join?'
    >
      <View>
        <AppText>Cover letter</AppText>
      </View>
      <TextArea style={styles.textarea} />
    </BaseModal>
  );
});

JoinModal.displayName = 'JoinModal';
