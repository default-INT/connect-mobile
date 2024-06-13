import { ComponentProps, memo } from 'react';
import { TextInput } from 'react-native';
import { theme } from '@root/styles/theme';
import { cn } from '@utils/styleUtils/concat';

import { styles } from './styles';

export interface IAppInputFieldProps extends ComponentProps<typeof TextInput> {
}

export const AppInputField = memo((props: IAppInputFieldProps) => {
  const { style, ...inputProps } = props;

  return (
    <TextInput
      style={cn(styles.input, style)}
      placeholderTextColor={theme.neutralSecondary}
      {...inputProps}
    />
  );
});

AppInputField.displayName = 'AppInput';
