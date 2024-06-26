import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { NotepadIcon } from '@root/assets/icons';

export const feedNavigatorOptions = (): BottomTabNavigationOptions => {
  const { t } = useTranslation('app');

  return {
    title: t('tabs.feed'),
    tabBarIcon: NotepadIcon,
  };
};
