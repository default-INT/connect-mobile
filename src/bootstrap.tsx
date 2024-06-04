import { memo, useLayoutEffect } from 'react';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '@root/navigators/RootNavigator';
import { setupGoogleSignIn } from '@utils/auth/setupGoogleSignIn';
import { store } from '@root/store';
import { Modal } from '@components/Modal';

const gestureWrapStyle = StyleSheet.flatten({ flex: 1 });

const App = memo(() => {
  useLayoutEffect(() => {
    setupGoogleSignIn();
  }, []);

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={gestureWrapStyle}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
        <Modal />
      </GestureHandlerRootView>
    </Provider>
  );
});

export default App;
