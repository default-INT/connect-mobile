import { memo, VFC } from 'react';
import {
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import { OpacityPressable } from '@components/OpacityPressable';

interface IProps extends Omit<PressableProps, 'children'> {
  icon: VFC<SvgProps>;
  iconProps?: SvgProps;
  iconStyle?: StyleProp<ViewStyle>;
  staticStyle?: StyleProp<ViewStyle>;
}

export const IconButton = memo((props: IProps) => {
  const {
    icon: Icon,
    iconStyle,
    staticStyle,
    iconProps,
    ...pressableProps
  } = props;

  return (
    <OpacityPressable {...pressableProps}>
      <Icon {...iconProps} />
    </OpacityPressable>
  );
});

IconButton.displayName = 'IconButton';
