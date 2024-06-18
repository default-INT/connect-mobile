import { memo, PropsWithChildren, useCallback, useEffect } from 'react';
import { Dimensions, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
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
import { removeFromQueueById } from '@root/action/modal';
import { BASE_DURATION } from '../../config';

import { styles } from './styles';

interface IProps {
  modalId: string;
  baseHeight: number;
  isRemoved: boolean;
  autoHeight?: boolean;
  fullHeight?: boolean;
}

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const UP_SWIPE_BIAS = 10;
// this values needed for scrolling view on android
const activeOffsetY: [activeOffsetYStart: number, activeOffsetYEnd: number] = [-30, 30];
const fullPaddingTop = appConfig.isIos ? 50 : 16;
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const ModalWrapper = memo((props: PropsWithChildren<IProps>) => {
  const { modalId, children, baseHeight, isRemoved, autoHeight = true, fullHeight } = props;
  const fillModal = useSharedValue(0);
  const translate = useSharedValue(baseHeight);
  const backgroundOpacity = useSharedValue(0);
  const dispatch = useDispatch();

  useEffect(() => {
    translate.value = withTiming(
      0,
      {
        duration: BASE_DURATION,
        easing: Easing.out(Easing.ease),
      },
    );
    if (!fullHeight) return;
    fillModal.value = withTiming(1, { duration: BASE_DURATION });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseHeight, fullHeight]);

  useEffect(() => {
    backgroundOpacity.value = withTiming(isRemoved ? 0 : 1, { duration: BASE_DURATION });
    if (!isRemoved) return;
    translate.value = withTiming(SCREEN_HEIGHT, { duration: BASE_DURATION });
    setTimeout(() => {
      dispatch(removeFromQueueById(modalId));
    }, BASE_DURATION);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRemoved]);

  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [0, 1];

    return ({
      transform: [{ translateY: translate.value }],
      height: interpolate(fillModal.value, inputRange, [baseHeight, SCREEN_HEIGHT]),
      paddingTop: interpolate(fillModal.value, inputRange, [0, fullPaddingTop]),
    });
  });

  const animatedOpacity = useAnimatedStyle(() => ({
    opacity: backgroundOpacity.value,
  }));

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

    if (isFullScreen && translationY > UP_SWIPE_BIAS) {
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
    if (isRemoved) return;
    closeModal(modalId);
  }, [isRemoved, modalId]);

  return (
    <>
      <AnimatedPressable
        style={cn(styles.hintPressable, animatedOpacity)}
        onPress={handleClosePress}
      />
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
