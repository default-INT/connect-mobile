import { memo, useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Region } from 'react-native-maps';
import { geoLoc } from '@utils/location';
import { Preloader } from '@components/Preloader';
import { IEventDto, ICoordinates } from '@root/api/events/dto';
import { api } from '@root/api';
import { throttle } from '@utils/throttle';
import { EventMarker } from './components/EventMarker';
import { MyLocationMarker } from './components/MyLocationMarker';

import { styles } from './styles';

export const EventsMapScreen = memo(() => {
  const [currentLocation, setCurrentLocation] = useState<ICoordinates | null>(null);
  const [eventList, setEventList] = useState<IEventDto[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleRegionChange = useCallback(throttle(async (regions: Region) => {
    try {
      const { latitude, longitude, latitudeDelta, longitudeDelta } = regions;
      const radius = geoLoc.calcRadius(latitude, latitudeDelta, longitudeDelta);

      const events = await api.events.location.getByCoordinates({
        latitude, longitude, radius,
      });

      setEventList(events);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }, 500), []);

  useEffect(() => {
    (async () => {
      const isAllowed = await geoLoc.requestLocationPermission();
      if (!isAllowed) return;
      const { coords } = await geoLoc.getCurrentLocation();
      const { latitude, longitude } = coords;
      setCurrentLocation({ latitude, longitude });
    })();

    return geoLoc.watchPosition(({ coords: { latitude, longitude } }) => setCurrentLocation({
      longitude,
      latitude,
    }));
  }, []);

  if (!currentLocation) return <Preloader />;

  const initRegion: Region = {
    ...currentLocation,
    ...geoLoc.calcDeltas(currentLocation.latitude, 1000),
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initRegion}
        onRegionChange={handleRegionChange}
      >
        <MyLocationMarker location={currentLocation} />
        {eventList.map(event => <EventMarker key={event.id} event={event} />)}
      </MapView>
    </View>
  );
});

EventsMapScreen.displayName = 'EventsMapScreen';