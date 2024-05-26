import { StyleSheet } from 'react-native';
import { theme } from '@root/styles/theme';
import { Fonts } from '@root/assets/fonts';
import { s } from '@utils/scaleUtils/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: s.width(30),
  },
  title: {
    color: theme.primaryRegular,
    fontSize: s.max(28),
    fontWeight: 'bold',
    fontFamily: Fonts.RobotoBold,
  },
});
