import { StyleSheet } from 'react-native';
import { s } from '@utils/scaleUtils/scale';

export const styles = StyleSheet.create({
  eventTypeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: s.max(10),
  },
});
