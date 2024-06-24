import { StyleSheet } from 'react-native';
import { theme } from '@root/styles/theme';
import { s } from '@utils/scaleUtils/scale';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: s.width(5),
    borderRadius: s.max(6),
    overflow: 'hidden',
    padding: s.max(5),
  },
  primaryContainer: {
    gap: s.width(6),
    padding: s.max(7),
    backgroundColor: theme.primaryRegular,
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    color: theme.mainBasic,
  },
  primaryText: {
    fontSize: s.max(16),
  },
});
