import { StyleSheet } from 'react-native';
import { theme } from '@root/styles/theme';

export const baseStyles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: theme.mainBasic,
    paddingHorizontal: 16,
  },
});
