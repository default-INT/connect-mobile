import { useTranslation } from 'react-i18next';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { ChatsIcon } from '@root/assets/icons';

export const chatNavigatorOptions = (): BottomTabNavigationOptions => {
  const { t } = useTranslation('app');

  return {
    title: t('tabs.chats'),
    tabBarIcon: ChatsIcon,
  };
};
