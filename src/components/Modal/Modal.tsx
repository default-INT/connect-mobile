import { memo } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { getModalQueue } from '@root/selectors/getModalQueue';
import { IModal } from '@root/types/modal';
import { BASE_HEIGHT } from '@components/Modal/config';
import { ModalWrapper } from './components/ModalWrapper';

import { styles } from './styles';

export const Modal = memo(() => {
  const queue = useSelector(getModalQueue);

  return (
    <View pointerEvents='box-none' style={styles.root}>
      {queue.map((modal: IModal) => {
        const { component: Component, modalProps, isRemoved } = modal;
        const baseHeight = modalProps.baseHeight || BASE_HEIGHT;

        return (
          <ModalWrapper
            key={modalProps.modalId}
            modalId={modalProps.modalId}
            baseHeight={baseHeight}
            autoHeight={modalProps.autoHeight}
            fullHeight={modalProps.fullHeight}
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
