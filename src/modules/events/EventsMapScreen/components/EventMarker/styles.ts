import { Platform, StyleSheet } from 'react-native';
import { theme } from '@root/styles/theme';
import { s } from '@utils/scaleUtils/scale';

// NOTE: https://github.com/react-native-maps/react-native-maps/issues/5068
const containerSize = Platform.OS === 'ios' ? s.width(54) : s.width(24);
const iconPadding = Platform.OS === 'ios' ? s.max(8) : s.width(2);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: containerSize,
    height: containerSize,
    backgroundColor: theme.mainBasic,
    borderBlockColor: theme.mainExtra,
    borderWidth: s.width(1),
    borderRadius: containerSize / 2,
    padding: iconPadding,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
