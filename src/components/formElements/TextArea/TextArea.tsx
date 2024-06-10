import { ComponentProps, memo } from 'react';

import { cn } from '@utils/styleUtils/concat';
import { AppInput } from '@components/formElements/AppInput';
import { styles } from './styles';

export interface IAppInputFieldProps extends ComponentProps<typeof AppInput> {
}

export const TextArea = memo((props: IAppInputFieldProps) => {
  const { style, ...textAreaProps } = props;

  return (
    <AppInput
      multiline
      {...textAreaProps}
      style={cn(styles.textArea, style)}
    />
  );
});

TextArea.displayName = 'TextArea';
