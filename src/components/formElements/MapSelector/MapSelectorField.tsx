import { memo, useCallback, useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import MapView, { Region } from 'react-native-maps';
import { FillMapPinIcon } from '@root/assets/icons';
import { theme } from '@root/styles/theme';
import { geoLoc } from '@utils/location';
import { debounce } from '@utils/debounce';
import { ICoordinates } from '@root/api/events/dto';
import { Preloader } from '@components/Preloader';
import { showModal } from '@utils/modal/showModal';
import { ModalSelector } from './components/ModalSelector';

import { styles } from './styles';

export interface IMapSelectorProps {
  modalTitle?: string;
  initialValue?: Region;
  onChange?: (value: ICoordinates) => void;
}

const INIT_RADIUS = 500;

export const MapSelectorField = memo((props: IMapSelectorProps) => {
  const {
    onChange,
    initialValue,
    modalTitle,
  } = props;

  const [initRegion, setInitRegion] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleRegionChange = useCallback(debounce((region: Region) => {
    const { latitude, longitude } = region;
    if (onChange) onChange({ latitude, longitude });
    setInitRegion(region);
  }, 1000), []);

  const handlePress = useCallback(() => {
    if (!initRegion) return;
    showModal(
      ModalSelector,
      { fullHeight: true, initRegion, handleChange: handleRegionChange, modalTitle },
    );
  }, [initRegion, modalTitle, handleRegionChange]);

  useEffect(() => {
    if (initRegion) return;
    (async () => {
      setIsLoading(true);
      try {
        const isAllowed = await geoLoc.requestLocationPermission();
        if (!isAllowed) throw new Error('Not allowed');
        const { coords: { latitude, longitude } } = await geoLoc.getCurrentLocation();
        if (onChange) onChange({ latitude, longitude });
        setInitRegion({
          latitude,
          longitude,
          ...geoLoc.calcDeltas(latitude, INIT_RADIUS),
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
      setIsLoading(false);
    })();
  }, [initRegion, onChange]);

  if (isLoading) return <Preloader />;

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <MapView
        style={styles.map}
        region={initRegion}
        scrollEnabled={false}
        zoomEnabled={false}
        rotateEnabled={false}
      />
      <FillMapPinIcon width={54} height={54} color={theme.mainExtra} />
    </Pressable>
  );
});

MapSelectorField.displayName = 'MapSelector';
