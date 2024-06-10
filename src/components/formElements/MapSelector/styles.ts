import { StyleSheet } from 'react-native';
import { s } from '@utils/scaleUtils/scale';
import { theme } from '@root/styles/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: s.height(140),
    width: '100%',
    borderRadius: s.max(12),
    borderWidth: s.max(1),
    borderColor: theme.neutralSecondary,
    backgroundColor: theme.neutralSecondary,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerLocation: {
    position: 'absolute',
  },
});
