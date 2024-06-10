import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable } from 'react-native';
import { useFormikContext } from 'formik';
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { EventType } from '@root/api/events/dto';
import { iconByType } from '@constants/iconByType';
import { theme } from '@root/styles/theme';
import { cn } from '@utils/styleUtils/concat';
import { IFormFields } from '../../constants';

import { styles } from './styles';

interface IProps {
  type: EventType;
}

const inputRange = [0, 1];

export const EventItem = memo(({ type = EventType.Other }:IProps) => {
  const { t } = useTranslation('common');
  const { values: { eventType }, setFieldValue } = useFormikContext<IFormFields>();
  const selected = useSharedValue(0);
  const isActive = eventType === type;

  useEffect(() => {
    selected.value = withTiming(isActive ? 1 : 0, { easing: Easing.ease });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  const containerAnimStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      selected.value,
      inputRange,
      [theme.mainBasic, theme.primaryRegular],
    ),
  }));

  const textAnimStyle = useAnimatedStyle(() => ({
    color: interpolateColor(selected.value, inputRange, [theme.primaryRegular, theme.mainBasic]),
  }));

  const handlePress = useCallback(() => {
    setFieldValue('eventType', isActive ? null : type);
  }, [setFieldValue, isActive, type]);

  const iconColor = isActive ? theme.mainBasic : theme.primaryRegular;
  const Icon = iconByType[type];

  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={cn(styles.container, containerAnimStyle)}>
        <Icon width={16} height={16} color={iconColor} />
        <Animated.Text
          style={cn(styles.text, textAnimStyle)}
        >
          {t(`event_types.${type}`)}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
});

EventItem.displayName = 'EventItem';
