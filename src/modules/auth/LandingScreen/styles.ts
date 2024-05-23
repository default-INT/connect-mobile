import { Platform, StatusBar, StyleSheet } from 'react-native';
import { theme } from '@root/styles/theme';
import { Fonts } from '@root/assets/fonts';
import { s } from '@utils/scaleUtils/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    gap: s.height(68),
    marginTop: s.height(150),
  },
  logo: {
    width: s.width(180),
    height: s.height(180),
    backgroundColor: theme.primaryRegular,
    justifyContent: 'center',
    borderRadius: s.max(90),
  },
  logoText: {
    color: theme.mainBasic,
    fontFamily: Fonts.RobotoBold,
    paddingHorizontal: s.width(5),
    fontSize: 44,
  },
  textContainer: {
    gap: s.height(36),
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Fonts.RobotoBold,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    fontFamily: Fonts.RobotoRegular,
    color: theme.neutralSecondary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: s.width(8),
  },
});
