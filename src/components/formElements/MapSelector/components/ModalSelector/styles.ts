import { StyleSheet } from 'react-native';
import { s } from '@utils/scaleUtils/scale';

export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: s.width(16),
  },
  body: {
    paddingHorizontal: 0,
  },
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: s.height(50),
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: s.width(16),
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
