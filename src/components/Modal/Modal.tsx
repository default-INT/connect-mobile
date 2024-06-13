import { memo } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { getModalQueue } from '@root/selectors/getModalQueue';
import { IModal } from '@root/types/modal';
import { ModalWrapper } from './components/ModalWrapper';

import { styles } from './styles';

export const Modal = memo(() => {
  const queue = useSelector(getModalQueue);

  return (
    <View pointerEvents='box-none' style={styles.root}>
      {queue.map((modal: IModal) => {
        const { component: Component, modalProps, isRemoved } = modal;
        const baseHeight = modalProps.baseHeight || 500;

        return (
          <ModalWrapper
            key={modalProps.modalId}
            modalId={modalProps.modalId}
            baseHeight={baseHeight}
            autoHeight={modalProps.autoHeight}
            isRemoved={isRemoved}
          >
            <Component {...modalProps} />
          </ModalWrapper>
        );
      })}
    </View>
  );
});

Modal.displayName = 'Modal';
