import { Dimensions, StyleSheet } from 'react-native';
import { s } from '@utils/scaleUtils/scale';
import { theme } from '@root/styles/theme';
import { Fonts } from '@root/assets/fonts';
import { appConfig } from '@constants/appConfig';

const { width } = Dimensions.get('window');
const titleMaxWidth = width - (s.width(16) * 2 + s.width(24) + s.width(8));

export const styles = StyleSheet.create({
  body: {
    paddingHorizontal: s.width(16),
    paddingTop: s.height(16),
    height: '100%',
  },
  title: {
    fontSize: s.max(28),
    fontFamily: Fonts.RobotoBold,
    color: theme.primaryRegular,
    maxWidth: titleMaxWidth,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.mainBasic,
    gap: s.width(8),
    width: '100%',
    paddingBottom: appConfig.isIos ? s.height(30) : s.height(20),
    paddingHorizontal: s.width(16),
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: s.height(16),
  },
});
