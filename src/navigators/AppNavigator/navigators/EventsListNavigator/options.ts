import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { EventsIcon } from '@root/assets/icons';

export const eventsListNavigatorOptions = (): BottomTabNavigationOptions => {
  const { t } = useTranslation('app');

  return {
    title: t('tabs.eventsList'),
    tabBarIcon: EventsIcon,
  };
};
