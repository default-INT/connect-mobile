import { memo, PropsWithChildren, useCallback, useEffect } from 'react';
import { Dimensions, Pressable } from 'react-native';
import Animated, {
  Easing, interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  GestureEvent,
  HandlerStateChangeEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { cn } from '@utils/styleUtils/concat';
import { closeModal } from '@utils/modal/closeModal';
import { appConfig } from '@constants/appConfig';
import { BASE_DURATION } from '../../config';

import { styles } from './styles';

interface IProps {
  isVisible: boolean;
  modalId: string;
  baseHeight: number;
  autoHeight?: boolean;
}

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
// this values needed for scrolling view on android
const activeOffsetY: [activeOffsetYStart: number, activeOffsetYEnd: number] = [-30, 30];
const fullPaddingTop = appConfig.isIos ? 50 : 16;

export const ModalWrapper = memo((props: PropsWithChildren<IProps>) => {
  const { modalId, isVisible, children, baseHeight, autoHeight = true } = props;
  const fillModal = useSharedValue(0);
  const translate = useSharedValue(baseHeight);

  useEffect(() => {
    translate.value = withTiming(
      isVisible ? 0 : baseHeight,
      {
        duration: BASE_DURATION,
        easing: Easing.out(Easing.ease),
      },
    );
  }, [isVisible, baseHeight, translate]);

  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [0, 1];

    return ({
      transform: [{ translateY: translate.value }],
      height: interpolate(fillModal.value, inputRange, [baseHeight, SCREEN_HEIGHT]),
      paddingTop: interpolate(fillModal.value, inputRange, [0, fullPaddingTop]),
    });
  });

  const handleGestureEvent = useCallback((event: GestureEvent<PanGestureHandlerEventPayload>) => {
    const { translationY } = event.nativeEvent;

    if (translationY > 0) {
      translate.value = translationY;
    }
  }, [translate]);

  const handleStateChange = useCallback((event: HandlerStateChangeEvent<Record<string, any>>) => {
    const { translationY } = event.nativeEvent;
    const isFullScreen = fillModal.value === 1;

    if (translationY > SCREEN_HEIGHT / 4) {
      translate.value = withTiming(SCREEN_HEIGHT, { duration: BASE_DURATION });

      return closeModal(modalId);
    }

    if (isFullScreen && translationY > 30) {
      translate.value = withTiming(0, { duration: BASE_DURATION });
      fillModal.value = withTiming(0, { duration: BASE_DURATION });

      return;
    }
    if (!isFullScreen && autoHeight && translationY * -1 > SCREEN_HEIGHT / 6) {
      translate.value = withTiming(0, { duration: BASE_DURATION });
      fillModal.value = withTiming(1, { duration: BASE_DURATION });

      return;
    }

    translate.value = withTiming(0, { duration: BASE_DURATION });
  }, [modalId, fillModal, translate, autoHeight]);

  const handleClosePress = useCallback(() => {
    if (!isVisible) return;
    closeModal(modalId);
  }, [isVisible, modalId]);

  return (
    <>
      <Pressable style={styles.hintPressable} onPress={handleClosePress} />
      <PanGestureHandler
        activeOffsetY={activeOffsetY}
        onGestureEvent={handleGestureEvent}
        onEnded={handleStateChange}
      >
        <Animated.View style={cn(styles.wrapper, animatedStyle)}>
          {children}
        </Animated.View>
      </PanGestureHandler>
    </>
  );
});

ModalWrapper.displayName = 'ModalWrapper';
