import { memo, useCallback } from 'react';
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { AppText } from '@components/AppText';
import { cn } from '@utils/styleUtils/concat';

import { styles } from './styles';

interface IProps extends Omit<PressableProps, 'children'> {
  title: string;
  staticStyle?: StyleProp<ViewStyle>;
  activeOpacity?: number;
}

export const LinkButton = memo((props: IProps) => {
  const {
    title,
    style,
    staticStyle,
    activeOpacity = 0.5,
    ...pressableProps
  } = props;

  const pressStyle = useCallback(({ pressed }: PressableStateCallbackType) => cn(
    { opacity: pressed ? activeOpacity : 1 },
    staticStyle,
  ), [activeOpacity, staticStyle]);

  return (
    <Pressable style={pressStyle} {...pressableProps}>
      <AppText style={styles.text}>
        {title}
      </AppText>
    </Pressable>
  );
});

LinkButton.displayName = 'LinkButton';
