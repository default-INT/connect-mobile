import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { getModalQueue } from '@root/selectors/getModalQueue';
import { IModal } from '@root/types/modal';
import { cn } from '@utils/styleUtils/concat';
import { ModalWrapper } from './components/ModalWrapper';
import { BASE_DURATION } from './config';

import { styles } from './styles';

export const Modal = memo(() => {
  const queue = useSelector(getModalQueue);
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(
      queue.length ? 1 : 0,
      {
        duration: BASE_DURATION,
        easing: Easing.ease,
      },
    );
  }, [opacity, queue.length]);

  const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }));

  return (
    <Animated.View pointerEvents='box-none' style={cn(styles.root, animatedStyle)}>
      {queue.map((modal: IModal, index) => {
        const { component: Component, modalProps } = modal;
        const baseHeight = modalProps.baseHeight || 500;

        return (
          <ModalWrapper
            key={modalProps.modalId}
            modalId={modalProps.modalId}
            baseHeight={baseHeight}
            autoHeight={modalProps.autoHeight}
            isVisible={queue.length === index + 1}
          >
            <Component {...modalProps} />
          </ModalWrapper>
        );
      })}
    </Animated.View>
  );
});

Modal.displayName = 'Modal';
