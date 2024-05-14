import { memo } from 'react';
import { View } from 'react-native';
import { AppText } from '@components/AppText';

export const EventsListScreen = memo(() => (
  <View>
    <AppText>EventsListScreen</AppText>
  </View>
));

EventsListScreen.displayName = 'EventsListScreen';
