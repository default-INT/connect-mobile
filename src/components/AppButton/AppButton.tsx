import { ComponentProps, memo, VFC } from 'react';
import { StyleProp, TextStyle, TouchableOpacity, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { AppText } from '@components/AppText';
import { cn } from '@utils/styleUtils/concat';
import { OpacityPressable } from '@components/OpacityPressable';

import { styles } from './styles';

type TButtonProps = Omit<ComponentProps<typeof TouchableOpacity>, 'children'>;

export interface IProps extends TButtonProps {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  icon?: VFC<SvgProps>;
  iconProps?: SvgProps;
  disabled?: boolean;
}

export const AppButton = memo((props: IProps) => {
  const {
    title,
    textStyle,
    style,
    icon: Icon,
    iconProps,
    ...args
  } = props;

  return (
    <OpacityPressable
      {...args}
      layoutStyle={cn(styles.button, style)}
    >
      <View style={styles.innerContainer}>
        {Icon && (
          <Icon style={styles.icon} width={28} height={28} {...iconProps} />
        )}
        <AppText style={cn(styles.text, textStyle)}>
          {title}
        </AppText>
      </View>
    </OpacityPressable>
  );
});

AppText.displayName = 'AppButton';
