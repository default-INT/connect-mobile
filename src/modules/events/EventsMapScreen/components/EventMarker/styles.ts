import { StyleSheet } from 'react-native';
import { theme } from '@root/styles/theme';
import { s } from '@utils/scaleUtils/scale';

export const styles = StyleSheet.create({
  container: {
    width: s.width(54),
    height: s.height(54),
    backgroundColor: theme.mainBasic,
    borderBlockColor: theme.mainExtra,
    borderWidth: s.width(1),
    borderRadius: s.max(54) / 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: s.width(42),
    height: s.height(42),
  },
});
