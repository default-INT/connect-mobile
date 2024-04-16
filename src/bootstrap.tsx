import { memo, useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from '@root/navigators/AuthNavigator';
import { setupGoogleSignIn } from '@utils/auth/setupGoogleSignIn';

const App = memo(() => {
  useLayoutEffect(() => {
    setupGoogleSignIn();
  }, []);

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
});

export default App;
