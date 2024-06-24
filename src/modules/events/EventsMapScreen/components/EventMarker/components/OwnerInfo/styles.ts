import { StyleSheet } from 'react-native';
import { theme } from '@root/styles/theme';
import { s } from '@utils/scaleUtils/scale';
import { Fonts } from '@root/assets/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 120,
    backgroundColor: theme.light,
    borderRadius: 6,
    gap: s.width(16),
    paddingHorizontal: s.width(12),
    paddingVertical: s.height(20),
  },
  avatar: {
    borderRadius: s.max(80) / 2,
    width: s.width(80),
    height: s.height(80),
  },
  info: {
    gap: s.height(10),
  },
  fullNameText: {
    fontSize: s.max(18),
    fontFamily: Fonts.RobotoBold,
  },
  text: {
    color: theme.neutralSecondary,
    fontSize: s.max(16),
  },
});
