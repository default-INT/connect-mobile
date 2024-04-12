import { StyleSheet } from 'react-native';
import { theme } from '@root/styles/theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  formContainer: {
    gap: 16,
    marginVertical: 32,
  },
  signUpContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  strokeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 24,
  },
  stroke: {
    flex: 1,
    height: 1,
    backgroundColor: theme.secondary,
  },
  strokeText: {
    paddingHorizontal: 10,
  },
  autoSignInContainer: {
    gap: 14,
  },
});
