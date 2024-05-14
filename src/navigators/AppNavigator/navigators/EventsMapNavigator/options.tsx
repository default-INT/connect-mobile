import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { TabItem } from './components/TabItem';

interface IArgs {
  focused: boolean;
}

const renderIcon = (props: IArgs) => (<TabItem {...props} />);

export const eventsMapNavigatorOptions = (): BottomTabNavigationOptions => ({
  title: '',
  tabBarIcon: renderIcon,
});
