import { StyleSheet } from 'react-native';
import { s } from '@utils/scaleUtils/scale';
import { theme } from '@root/styles/theme';

export const styles = StyleSheet.create({
  container: {
    borderWidth: s.max(1),
    padding: s.max(16),
    borderColor: theme.neutralSecondary,
    borderRadius: s.max(6),
    maxHeight: s.height(50),
    alignItems: 'center',
  },
  placeholder: {
    color: theme.neutralSecondary,
  },
});
