import { StyleSheet } from 'react-native';
import { theme } from '@root/styles/theme';
import { Fonts } from '@root/assets/fonts';
import { s } from '@utils/scaleUtils/scale';

export const styles = StyleSheet.create({
  container: {
    width: s.width(200),
    borderRadius: s.max(6),
    overflow: 'hidden',
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    color: theme.mainBasic,
    fontFamily: Fonts.RobotoBold,
    fontSize: s.max(12),
    paddingHorizontal: s.width(8),
    paddingVertical: s.height(4),
    borderBottomWidth: s.max(1),
    borderColor: theme.mainBasic,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: s.width(4),
    padding: s.max(8),
  },
});
