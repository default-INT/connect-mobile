import { memo, useMemo } from 'react';
import { View } from 'react-native';
import { cn } from '@utils/styleUtils/concat';
import { MapIcon } from '@root/assets/icons';
import { theme } from '@root/styles/theme';

import { styles } from './styles';

interface IProps {
  focused: boolean;
}

export const TabItem = memo((props: IProps) => {
  const { focused } = props;

  const { viewModifier, iconColor } = useMemo(() => {
    if (focused) return { viewModifier: styles.activeView, iconColor: theme.primaryRegular };

    return { viewModifier: styles.inactiveView, iconColor: theme.mainBasic };
  }, [focused]);

  return (
    <View style={cn(styles.baseViewStyle, viewModifier)}>
      <MapIcon style={styles.iconStyle} color={iconColor} />
    </View>
  );
});

TabItem.displayName = 'TabItem';
