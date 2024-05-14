import { StyleSheet } from 'react-native';
import { theme } from '@root/styles/theme';
import { s } from '@utils/scaleUtils/scale';

export const styles = StyleSheet.create({
  baseViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: s.width(60),
    height: s.height(60),
    borderRadius: s.max(60) / 2,
  },
  activeView: {
    backgroundColor: theme.primary,
  },
  inactiveView: {
    backgroundColor: theme.white,
    borderWidth: s.min(2),
    borderColor: theme.primary,
  },
  iconStyle: {
    width: s.width(42),
    height: s.height(42),
  },
});
