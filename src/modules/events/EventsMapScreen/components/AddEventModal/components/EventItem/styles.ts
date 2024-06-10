import { StyleSheet } from 'react-native';
import { s } from '@utils/scaleUtils/scale';
import { theme } from '@root/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: s.width(6),
    padding: s.max(6),
    borderWidth: s.width(1),
    borderColor: theme.primaryRegular,
    borderRadius: s.max(6),
    alignItems: 'center',
    color: theme.primaryRegular,
  },
  text: {
    fontSize: 16,
  },
});
