import { memo } from 'react';
import { View } from 'react-native';
import { AppText } from '@components/AppText';

export const FeedListScreen = memo(() => (
  <View>
    <AppText>FeedListScreen</AppText>
  </View>
));

FeedListScreen.displayName = 'FeedListScreen';
