import { memo } from 'react';
import { Text, useColorScheme, View } from 'react-native';

export const LandingScreen = memo(() => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <Text>My Landing page</Text>
    </View>
  );
});

LandingScreen.displayName = 'LandingScreen';
