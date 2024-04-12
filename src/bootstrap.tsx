import { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from '@root/navigators/AuthNavigator';

const App = memo(() => (
  <NavigationContainer>
    <AuthNavigator />
  </NavigationContainer>
));

export default App;
