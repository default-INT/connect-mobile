import { ComponentProps, memo } from 'react';
import { Text } from 'react-native';
import { cn } from '@utils/styleUtils/concat';

import { styles } from './styles';

interface IProps extends ComponentProps<typeof Text> {

}

export const AppText = memo((props: IProps) => {
  const { children, style, ...args } = props;

  return (
    <Text
      {...args}
      style={cn(styles.text, style)}
    >
      {children}
    </Text>
  );
});

AppText.displayName = 'AppText';
