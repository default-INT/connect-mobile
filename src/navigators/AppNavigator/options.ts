import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { theme } from '@root/styles/theme';
import { s } from '@utils/scaleUtils/scale';

const tabBarStyle = Platform.OS === 'android' ? StyleSheet.flatten<ViewStyle>({
  height: 60,
  paddingBottom: s.height(10),
}) : false;

export const appOptions: BottomTabNavigationOptions = {
  header: () => null,
  tabBarIconStyle: StyleSheet.flatten<TextStyle>({
    width: s.width(24),
    height: s.height(24),
  }),
  tabBarStyle,
  tabBarActiveTintColor: theme.primaryRegular,
  tabBarInactiveTintColor: theme.mainExtra,
};
