import { StyleSheet } from 'react-native';
import { s } from '@utils/scaleUtils/scale';
import { theme } from '@root/styles/theme';
import { Fonts } from '@root/assets/fonts';
import { appConfig } from '@constants/appConfig';

export const styles = StyleSheet.create({
  body: {
    paddingHorizontal: s.width(16),
    paddingTop: s.height(16),
    height: '100%',
  },
  title: {
    fontSize: s.max(28),
    fontFamily: Fonts.RobotoBold,
    marginBottom: s.height(16),
    color: theme.primaryRegular,
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
});
