import { StyleSheet } from 'react-native';
import { theme } from '@root/styles/theme';
import { s } from '@utils/scaleUtils/scale';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  formContainer: {
    gap: s.height(16),
    marginVertical: s.height(32),
  },
  signUpContainer: {
    flexDirection: 'row',
    gap: s.width(5),
  },
  strokeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: s.height(24),
  },
  stroke: {
    flex: 1,
    height: s.height(1),
    backgroundColor: theme.neutralSecondary,
  },
  strokeText: {
    paddingHorizontal: s.width(10),
  },
  autoSignInContainer: {
    gap: s.height(14),
  },
});
