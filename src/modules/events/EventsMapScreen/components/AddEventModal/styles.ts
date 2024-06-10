import { StyleSheet } from 'react-native';
import { s } from '@utils/scaleUtils/scale';
import { theme } from '@root/styles/theme';

export const styles = StyleSheet.create({
  container: {
    gap: s.height(16),
  },
  eventTypeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: s.max(10),
  },
  dateContainer: {
    flexDirection: 'row',
    gap: s.max(10),
    width: '100%',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
  },
  field: {
    flexDirection: 'row',
    gap: s.max(2),
  },
  optionalText: {
    color: theme.neutralSecondary,
  },
});
