import { StyleSheet } from 'react-native';
import { s } from '@utils/scaleUtils/scale';
import { theme } from '@root/styles/theme';

export const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopRightRadius: s.max(16),
    borderTopLeftRadius: s.max(16),
    backgroundColor: theme.mainBasic,
  },
  hintPressable: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
