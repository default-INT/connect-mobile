import { Platform, StyleSheet } from 'react-native';
import { s } from '@utils/scaleUtils/scale';

// NOTE: https://github.com/react-native-maps/react-native-maps/issues/5068
const size = Platform.OS === 'ios' ? s.width(54) : s.width(24);

export const styles = StyleSheet.create({
  container: {
    width: size,
    height: size,
  },
});
