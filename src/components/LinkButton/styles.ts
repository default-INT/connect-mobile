import { StyleSheet } from 'react-native';
import { theme } from '@root/styles/theme';
import { Fonts } from '@root/assets/fonts';

export const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: theme.primaryRegular,
    fontFamily: Fonts.RobotoBold,
  },
});
