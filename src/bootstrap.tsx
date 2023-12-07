import { memo } from 'react';
import { SafeAreaView } from 'react-native';
import { LandingScreen } from '@modules/LandingScreen';

const App = memo(() => (
  <SafeAreaView>
    <LandingScreen />
  </SafeAreaView>
));

export default App;
