import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { baseStyles } from '@root/styles/baseStyles';
import { gen } from '@utils/router/gen';
import { r } from '@constants/routes';
import { ChatScreen } from '@modules/chats/ChatScreen';

const Stack = createNativeStackNavigator();

export const ChatNavigator = () => (
  <Stack.Navigator
    screenOptions={{ contentStyle: baseStyles.baseContainer }}
    initialRouteName={gen.loc(r.app.chats.root)}
  >
    <Stack.Screen
      name={gen.loc(r.app.chats.root)}
      component={ChatScreen}
    />
  </Stack.Navigator>
);
