import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { baseStyles } from '@root/styles/baseStyles';
import { gen } from '@utils/router/gen';
import { r } from '@constants/routes';
import { FeedListScreen } from '@modules/feed/FeedListScreen';

const Stack = createNativeStackNavigator();

export const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{ contentStyle: baseStyles.baseContainer }}
    initialRouteName={gen.loc(r.app.feed.root)}
  >
    <Stack.Screen
      name={gen.loc(r.app.feed.root)}
      component={FeedListScreen}
    />
  </Stack.Navigator>
);
