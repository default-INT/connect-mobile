import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { baseStyles } from '@root/styles/baseStyles';
import { gen } from '@utils/router/gen';
import { r } from '@constants/routes';
import { EventsMapScreen } from '@modules/events/EventsMapScreen';

const Stack = createNativeStackNavigator();

export const EventsMapNavigator = () => (
  <Stack.Navigator
    screenOptions={{ contentStyle: baseStyles.baseContainer }}
    initialRouteName={gen.loc(r.app.eventsMap.root)}
  >
    <Stack.Screen
      name={gen.loc(r.app.eventsMap.root)}
      component={EventsMapScreen}
    />
  </Stack.Navigator>
);
