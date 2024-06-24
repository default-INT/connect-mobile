import { StyleSheet } from 'react-native';
import { s } from '@utils/scaleUtils/scale';
import { theme } from '@root/styles/theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: s.height(16),
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: theme.neutralSecondary,
    fontSize: s.max(16),
  },
});
