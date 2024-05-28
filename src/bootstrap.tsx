import { memo, useLayoutEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '@root/navigators/RootNavigator';
import { setupGoogleSignIn } from '@utils/auth/setupGoogleSignIn';
import { setAccessToken } from '@rnmapbox/maps';
import { store } from '@root/store';
import { env } from '@constants/env';

// setAccessToken(env.MAP_BOX_PUB_KEY);

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
