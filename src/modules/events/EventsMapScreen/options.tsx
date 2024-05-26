import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Header } from './components/Header';

export const eventsMapOptions : NativeStackNavigationOptions = {
  headerTitle: () => <Header />,
};
