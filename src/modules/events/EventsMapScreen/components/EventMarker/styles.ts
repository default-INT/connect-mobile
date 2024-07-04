import { StyleSheet } from 'react-native';
import { theme } from '@root/styles/theme';
import { s } from '@utils/scaleUtils/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: s.max(52),
    height: s.max(52),
    borderRadius: s.max(52) / 2,
    padding: s.max(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.primaryRegular,
    borderColor: theme.primaryRegular,
    borderWidth: s.max(2),
  },
});
