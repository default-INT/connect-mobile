import { memo } from 'react';
import { Marker } from 'react-native-maps';
import { ICoordinates } from '@root/api/events/dto';
import { FillMapPinIcon } from '@root/assets/icons';
import { theme } from '@root/styles/theme';

import { styles } from './styles';

const MAIN_LVL = 10;

interface IProps {
  location: ICoordinates;
}

export const MyLocationMarker = memo((props: IProps) => {
  const { location } = props;

  return (
    <Marker coordinate={location} style={styles.container} zIndex={MAIN_LVL}>
      <FillMapPinIcon color={theme.mainExtra} />
    </Marker>
  );
});

MyLocationMarker.displayName = 'MyLocationMarker';
