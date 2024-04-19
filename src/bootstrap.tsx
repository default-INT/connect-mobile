import { memo, useLayoutEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '@root/navigators/RootNavigator';
import { setupGoogleSignIn } from '@utils/auth/setupGoogleSignIn';
import { store } from '@root/store';

const App = memo(() => {
  useLayoutEffect(() => {
    setupGoogleSignIn();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
});

export default App;
