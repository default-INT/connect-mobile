import { memo } from 'react';
import { View } from 'react-native';
import { Marker } from 'react-native-maps';
import { IEventDto } from '@root/api/events/dto';
import { PinQuestionIcon } from '@root/assets/icons';
import { theme } from '@root/styles/theme';

import { styles } from './styles';

interface IProps {
  event: IEventDto;
}

export const EventMarker = memo((props: IProps) => {
  const { event } = props;
  const { coords } = event.location;

  if (!coords) return null;

  return (
    <Marker coordinate={coords} style={styles.container}>
      <View style={styles.iconContainer}>
        <PinQuestionIcon color={theme.mainExtra} />
      </View>
    </Marker>
  );
});

EventMarker.displayName = 'EventMarker';
