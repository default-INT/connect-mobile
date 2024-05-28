import { memo, useState } from 'react';
import { Marker } from 'react-native-maps';
import { ICoordinates } from '@root/api/events/dto';
import { FillMapPinIcon } from '@root/assets/icons';
import { theme } from '@root/styles/theme';

import { Image, Text } from 'react-native';
import { styles } from './styles';

interface IProps {
  location: ICoordinates;
}

export const MyLocationMarkerAndroid = memo((props: IProps) => {
  const { location } = props;
  const [initRender, setInitRender] = useState(true);

  return (
    <Marker
      coordinate={location}
      tracksViewChanges={initRender}
    >
      <Image
        // key={`${initRender}`}
        style={styles.container}
        source={require('./fill-map-pin.png')}
        onLoad={() => setInitRender(false)}
        resizeMode='contain'
      />
    </Marker>
  );
});

MyLocationMarkerAndroid.displayName = 'MyLocationMarker';
