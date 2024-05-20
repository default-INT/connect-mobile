import { StyleSheet } from 'react-native';
import { theme } from '@root/styles/theme';
import { s } from '@utils/scaleUtils/scale';

export const styles = StyleSheet.create({
  input: {
    borderWidth: s.max(1),
    padding: s.max(16),
    borderColor: theme.neutralSecondary,
    borderRadius: s.max(6),
  },
});
