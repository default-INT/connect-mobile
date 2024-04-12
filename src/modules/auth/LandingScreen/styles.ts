import { StyleSheet } from 'react-native';
import { theme } from '@root/styles/theme';
import { Fonts } from '@root/assets/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 68,
    marginTop: 150,
  },
  logo: {
    width: 180,
    height: 180,
    backgroundColor: theme.primary,
    justifyContent: 'center',
    borderRadius: 90,
  },
  logoText: {
    color: theme.white,
    fontFamily: Fonts.RobotoBold,
    paddingHorizontal: 5,
    fontSize: 44,
  },
  textContainer: {
    gap: 36,
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
    color: theme.secondary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
});
