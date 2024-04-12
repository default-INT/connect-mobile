import { ComponentProps, memo } from 'react';
import { TextInput } from 'react-native';
import { theme } from '@root/styles/theme';
import { cn } from '@utils/styleUtils/concat';
import { styles } from './styles';

interface IProps extends ComponentProps<typeof TextInput> {

}

export const AppInput = memo((props: IProps) => {
  const { style, ...inputProps } = props;

  return (
    <TextInput
      style={cn(styles.input, style)}
      placeholderTextColor={theme.secondary}
      {...inputProps}
    />
  );
});

AppInput.displayName = 'AppInput';
