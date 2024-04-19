import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { baseStyles } from '@root/styles/baseStyles';
import { gen } from '@utils/router/gen';
import { r } from '@constants/routes';
import { landingOptions } from '@modules/auth/LandingScreen';
import { ChatScreen } from '@modules/chats/ChatScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{ contentStyle: baseStyles.baseContainer }}
    initialRouteName={gen.loc(r.app.chats)}
  >
    <Stack.Screen
      name={gen.loc(r.app.chats)}
      component={ChatScreen}
      options={landingOptions}
    />
  </Stack.Navigator>
);
