import { memo } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { AppText } from '@components/AppText';
import { cn } from '@utils/styleUtils/concat';

import { styles } from './styles';

interface IProps {
  errorMessage?: string;
  modifiers?: StyleProp<TextStyle>
}

export const Error = memo(({ errorMessage, modifiers }: IProps) => (
  <AppText style={cn(styles.error, modifiers)}>{errorMessage}</AppText>
));

Error.displayName = 'Error';
