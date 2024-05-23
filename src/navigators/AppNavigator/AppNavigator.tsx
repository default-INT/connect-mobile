import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { gen } from '@utils/router/gen';
import { r } from '@constants/routes';
import { Platform } from 'react-native';
import { FeedNavigator, feedNavigatorOptions } from './navigators/FeedNavigator';
import { EventsListNavigator, eventsListNavigatorOptions } from './navigators/EventsListNavigator';
import { EventsMapNavigator, eventsMapNavigatorOptions } from './navigators/EventsMapNavigator';
import { ChatNavigator, chatNavigatorOptions } from './navigators/ChatNavigator';
import { ProfileNavigator, profileNavigatorOptions } from './navigators/ProfileNavigator';
import { appOptions } from './options';

const BottomTabNavigator = createBottomTabNavigator();

export const AppNavigator = () => (
  <BottomTabNavigator.Navigator
    screenOptions={appOptions}
    detachInactiveScreens={Platform.OS === 'ios'}
    initialRouteName={gen.loc(r.app.eventsMap)}
  >
    <BottomTabNavigator.Screen
      name={gen.loc(r.app.chats)}
      component={ChatNavigator}
      options={chatNavigatorOptions}
    />
    <BottomTabNavigator.Screen
      name={gen.loc(r.app.eventsList)}
      component={EventsListNavigator}
      options={eventsListNavigatorOptions}
    />
    <BottomTabNavigator.Screen
      name={gen.loc(r.app.eventsMap)}
      component={EventsMapNavigator}
      options={eventsMapNavigatorOptions}
    />
    <BottomTabNavigator.Screen
      name={gen.loc(r.app.feed)}
      component={FeedNavigator}
      options={feedNavigatorOptions}
    />
    <BottomTabNavigator.Screen
      name={gen.loc(r.app.profile)}
      component={ProfileNavigator}
      options={profileNavigatorOptions}
    />
  </BottomTabNavigator.Navigator>
);
