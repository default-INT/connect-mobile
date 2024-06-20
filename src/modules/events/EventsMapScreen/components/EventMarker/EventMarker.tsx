import { memo, useCallback, useEffect, useState } from 'react';
import { Marker } from 'react-native-maps';
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { EventType, IEventDto } from '@root/api/events/dto';
import { theme } from '@root/styles/theme';
import { cn } from '@utils/styleUtils/concat';
import { iconByType } from '@constants/iconByType';
import { EventTooltip } from './components/EventTooltip';

import { styles } from './styles';

interface IProps {
  event: IEventDto;
}

export const EventMarker = memo((props: IProps) => {
  const { event } = props;
  const { coords } = event;
  const fadeAnim = useSharedValue(0);
  const selected = useSharedValue(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fadeAnim.value = withTiming(1, {
      easing: Easing.inOut(Easing.ease),
      duration: 1000,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelect = useCallback(() => {
    selected.value = withTiming(1, {
      easing: Easing.inOut(Easing.ease),
    });
    setIsActive(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeselect = useCallback(() => {
    selected.value = withTiming(0, {
      easing: Easing.ease,
    });
    setIsActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Icon = iconByType[event.eventType] || iconByType[EventType.Other];

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: fadeAnim.value,
    backgroundColor: interpolateColor(
      selected.value,
      [0, 1],
      [theme.primaryRegular, theme.mainBasic],
    ),
  }));

  if (!coords) return null;

  const color = isActive ? theme.primaryRegular : theme.mainBasic;

  return (
    <Marker
      coordinate={coords}
      style={styles.container}
      onSelect={handleSelect}
      onDeselect={handleDeselect}
    >
      <Animated.View style={cn(styles.iconContainer, animatedStyle)}>
        <Icon color={color} />
      </Animated.View>

      <EventTooltip event={event} />
    </Marker>
  );
});

EventMarker.displayName = 'EventMarker';
