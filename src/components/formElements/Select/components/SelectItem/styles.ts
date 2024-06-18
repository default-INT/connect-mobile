import { StyleSheet } from 'react-native';
import { s } from '@utils/scaleUtils/scale';
import { Fonts } from '@root/assets/fonts';
import { theme } from '@root/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: s.height(40),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: s.max(1),
    borderColor: theme.neutralTertiary,
    paddingHorizontal: 14,
  },
  text: {
    fontSize: s.max(16),
    fontFamily: Fonts.RobotoBold,
  },
});
