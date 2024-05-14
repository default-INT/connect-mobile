import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { baseStyles } from '@root/styles/baseStyles';
import { gen } from '@utils/router/gen';
import { r } from '@constants/routes';
import { ProfileScreen } from '@modules/profile/ProfileScreen';

const Stack = createNativeStackNavigator();

export const ProfileNavigator = () => (
  <Stack.Navigator
    screenOptions={{ contentStyle: baseStyles.baseContainer }}
    initialRouteName={gen.loc(r.app.profile.root)}
  >
    <Stack.Screen
      name={gen.loc(r.app.profile.root)}
      component={ProfileScreen}
    />
  </Stack.Navigator>
);
