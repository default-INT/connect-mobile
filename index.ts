import { AppRegistry } from 'react-native';
import { i18n } from '@utils/i18n';
import App from './src/bootstrap';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => {
  i18n.init();

  return App;
});
