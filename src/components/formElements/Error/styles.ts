import { StyleSheet } from 'react-native';
import { s } from '@utils/scaleUtils/scale';
import { theme } from '@root/styles/theme';

export const styles = StyleSheet.create({
  error: {
    fontSize: s.max(12),
    marginTop: s.max(5),
    marginLeft: 6,
    color: theme.dangerousRegular,
  },
});
