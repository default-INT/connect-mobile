import { memo } from 'react';
import { View } from 'react-native';
import { AppText } from '@components/AppText';

export const ProfileScreen = memo(() => (
  <View>
    <AppText>Profile</AppText>
  </View>
));

ProfileScreen.displayName = 'ProfileScreen';
