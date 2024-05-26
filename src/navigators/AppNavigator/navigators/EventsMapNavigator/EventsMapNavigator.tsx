import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { gen } from '@utils/router/gen';
import { r } from '@constants/routes';
import { EventsMapScreen } from '@modules/events/EventsMapScreen';
import { eventsMapOptions } from '@modules/events/EventsMapScreen/options';

const Stack = createNativeStackNavigator();

export const EventsMapNavigator = () => (
  <Stack.Navigator
    initialRouteName={gen.loc(r.app.eventsMap.root)}
  >
    <Stack.Screen
      name={gen.loc(r.app.eventsMap.root)}
      component={EventsMapScreen}
      options={eventsMapOptions}
    />
  </Stack.Navigator>
);
