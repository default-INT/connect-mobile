import { memo, useEffect, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { Marker } from 'react-native-maps';
import { EventType, IEventDto } from '@root/api/events/dto';
import { theme } from '@root/styles/theme';
import { cn } from '@utils/styleUtils/concat';
import { iconByType } from './config';

import { styles } from './styles';

interface IProps {
  event: IEventDto;
}

export const EventMarker = memo((props: IProps) => {
  const { event } = props;
  const { coords } = event.location;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const isActive = false;
  const Icon = iconByType[event.eventType] || iconByType[EventType.Other];

  const { container, color } = useMemo(() => {
    if (isActive) return { container: styles.activeMarker, color: theme.primaryRegular };

    return { container: styles.inactiveMarker, color: theme.mainBasic };
  }, [isActive]);

  if (!coords) return null;

  return (
    <Marker coordinate={coords} style={styles.container}>
      <Animated.View style={[
        cn(styles.iconContainer, container),
        { opacity: fadeAnim },
      ]}
      >
        <Icon color={color} />
      </Animated.View>
    </Marker>
  );
});

EventMarker.displayName = 'EventMarker';
