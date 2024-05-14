import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { StyleSheet, TextStyle } from 'react-native';
import { theme } from '@root/styles/theme';
import { s } from '@utils/scaleUtils/scale';

export const appOptions: BottomTabNavigationOptions = {
  header: () => null,
  tabBarIconStyle: StyleSheet.flatten<TextStyle>({
    width: s.width(24),
    height: s.height(24),
  }),
  tabBarActiveTintColor: theme.primary,
  tabBarInactiveTintColor: theme.black,
};
