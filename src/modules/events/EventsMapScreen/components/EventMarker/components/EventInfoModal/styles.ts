import { StyleSheet } from 'react-native';
import { s } from '@utils/scaleUtils/scale';
import { theme } from '@root/styles/theme';
import { Fonts } from '@root/assets/fonts';

export const styles = StyleSheet.create({
  container: {
    gap: s.height(16),
  },
  metadata: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: s.width(10),
  },
  participantsContainer: {
    paddingVertical: s.height(9),
    paddingHorizontal: s.height(12),
    borderRadius: s.max(6),
    backgroundColor: theme.light,
  },
  participantsTitle: {
    fontSize: s.max(16),
    fontFamily: Fonts.RobotoBold,
  },
  description: {
    fontSize: s.max(16),
  },
});
