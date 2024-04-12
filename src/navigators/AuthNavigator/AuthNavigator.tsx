import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { landingOptions, LandingScreen } from '@modules/auth/LandingScreen';
import { r } from '@constants/routes';
import { gen } from '@utils/router/gen';
import { baseStyles } from '@root/styles/baseStyles';
import { LoginScreen, loginOptions } from '@modules/auth/LoginScreen';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{ contentStyle: baseStyles.baseContainer }}
    initialRouteName={gen.loc(r.auth.landing)}
  >
    <Stack.Screen
      name={gen.loc(r.auth.landing)}
      component={LandingScreen}
      options={landingOptions}
    />
    <Stack.Screen
      name={gen.loc(r.auth.login)}
      component={LoginScreen}
      options={loginOptions}
    />
  </Stack.Navigator>
);
