import { useTranslation } from 'react-i18next';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { SmileIcon } from '@root/assets/icons';

export const profileNavigatorOptions = (): BottomTabNavigationOptions => {
  const { t } = useTranslation('app');

  return {
    title: t('tabs.profile'),
    tabBarIcon: SmileIcon,
  };
};
