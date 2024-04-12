import { StyleSheet } from 'react-native';
import { theme } from '@root/styles/theme';
import { Fonts } from '@root/assets/fonts';

export const buttonModifiers = StyleSheet.create({
  secondaryButton: {
    backgroundColor: theme.white,
    borderColor: theme.primary,
    borderWidth: 1,
  },
  primaryText: {
    color: theme.primary,
  },
  blackButton: {
    borderWidth: 1,
    borderColor: theme.black,
    backgroundColor: theme.black,
  },
  blackButtonText: {
    color: theme.white,
  },
  whiteButton: {
    backgroundColor: theme.white,
    borderColor: theme.secondary,
    borderWidth: 1,
  },
  whiteButtonText: {
    color: theme.secondary,
  },
  buttonFlex: {
    flex: 1,
  },
});

export const styles = StyleSheet.create({
  button: {
    position: 'relative',
    elevation: 8,
    backgroundColor: theme.primary,
    padding: 20,
    borderRadius: 8,
  },
  innerContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    left: 0,
  },
  text: {
    color: theme.white,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: Fonts.RobotoBold,
  },
});
