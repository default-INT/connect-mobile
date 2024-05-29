import { Platform, StyleSheet } from 'react-native';
import { theme } from '@root/styles/theme';
import { s } from '@utils/scaleUtils/scale';

// NOTE: https://github.com/react-native-maps/react-native-maps/issues/5068
const containerSize = Platform.OS === 'ios' ? s.max(52) : s.max(24);
const iconPadding = Platform.OS === 'ios' ? s.max(10) : s.max(5);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: containerSize,
    height: containerSize,
    borderRadius: containerSize / 2,
    padding: iconPadding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeMarker: {
    backgroundColor: theme.mainBasic,
    borderColor: theme.primaryRegular,
    borderWidth: s.max(2),
  },
  inactiveMarker: {
    backgroundColor: theme.primaryRegular,
  },
});
