import { StyleSheet } from 'react-native';
import { theme } from '@root/styles/theme';
import { Fonts } from '@root/assets/fonts';
import { s } from '@utils/scaleUtils/scale';

export const buttonModifiers = StyleSheet.create({
  updateButton: {
    backgroundColor: theme.amber,
  },
  secondaryButton: {
    backgroundColor: theme.mainBasic,
    borderColor: theme.primaryRegular,
    borderWidth: s.max(1),
  },
  transparentButton: {
    backgroundColor: 'transparent',
    borderColor: theme.primaryRegular,
    borderWidth: s.max(1),
  },
  primaryText: {
    color: theme.primaryRegular,
  },
  blackButton: {
    borderWidth: s.max(1),
    borderColor: theme.mainExtra,
    backgroundColor: theme.mainExtra,
  },
  blackButtonText: {
    color: theme.mainBasic,
  },
  whiteButton: {
    backgroundColor: theme.mainBasic,
    borderColor: theme.neutralSecondary,
    borderWidth: s.max(1),
  },
  whiteButtonText: {
    color: theme.neutralSecondary,
  },
  buttonFlex: {
    flex: 1,
  },
});

export const styles = StyleSheet.create({
  button: {
    position: 'relative',
    elevation: 4,
    backgroundColor: theme.primaryRegular,
    padding: s.max(20),
    borderRadius: s.max(8),
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
    color: theme.mainBasic,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: Fonts.RobotoBold,
  },
});
