import { memo, useCallback, VFC } from 'react';
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import { cn } from '@utils/styleUtils/concat';

interface IProps extends Omit<PressableProps, 'children'> {
  icon: VFC<SvgProps>;
  iconProps?: SvgProps;
  iconStyle?: StyleProp<ViewStyle>;
  staticStyle?: StyleProp<ViewStyle>;
  activeOpacity?: number;
}

export const IconButton = memo((props: IProps) => {
  const {
    icon: Icon,
    iconStyle,
    staticStyle,
    iconProps,
    activeOpacity = 0.5,
    ...pressableProps
  } = props;

  const pressStyle = useCallback(({ pressed }: PressableStateCallbackType) => cn(
    { opacity: pressed ? activeOpacity : 1 },
    staticStyle,
  ), [activeOpacity, staticStyle]);

  return (
    <Pressable style={pressStyle} {...pressableProps}>
      <Icon {...iconProps} />
    </Pressable>
  );
});

IconButton.displayName = 'IconButton';
