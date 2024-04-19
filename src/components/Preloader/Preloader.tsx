import { ComponentProps, memo } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { theme } from '@root/styles/theme';

import { styles } from './styles';

type TProps = ComponentProps<typeof ActivityIndicator>;

export const Preloader = memo((props: TProps) => (
  <View style={styles.wrapper}>
    <ActivityIndicator color={theme.primary} {...props} />
  </View>
));

Preloader.displayName = 'Preloader';
