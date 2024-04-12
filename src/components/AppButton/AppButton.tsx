import { ComponentProps, memo, VFC } from 'react';
import { StyleProp, TextStyle, TouchableOpacity, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { AppText } from '@components/AppText';
import { cn } from '@utils/styleUtils/concat';

import { styles } from './styles';

type TButtonProps = Omit<ComponentProps<typeof TouchableOpacity>, 'children'>;

interface IProps extends TButtonProps {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  icon?: VFC<SvgProps>;
  iconProps?: SvgProps;
}

// TODO: replace TouchableOpacity to Pressable
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
    <TouchableOpacity {...args} style={cn(styles.button, style)}>
      <View style={styles.innerContainer}>
        {Icon && (
          <Icon style={styles.icon} width={28} height={28} {...iconProps} />
        )}
        <AppText style={cn(styles.text, textStyle)}>
          {title}
        </AppText>
      </View>
    </TouchableOpacity>
  );
});

AppText.displayName = 'AppButton';
