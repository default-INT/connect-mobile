import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { baseStyles } from '@root/styles/baseStyles';
import { gen } from '@utils/router/gen';
import { r } from '@constants/routes';
import { EventsListScreen } from '@modules/events/EventsListScreen';

const Stack = createNativeStackNavigator();

export const EventsListNavigator = () => (
  <Stack.Navigator
    screenOptions={{ contentStyle: baseStyles.baseContainer }}
    initialRouteName={gen.loc(r.app.eventsList.root)}
  >
    <Stack.Screen
      name={gen.loc(r.app.eventsList.root)}
      component={EventsListScreen}
    />
  </Stack.Navigator>
);
