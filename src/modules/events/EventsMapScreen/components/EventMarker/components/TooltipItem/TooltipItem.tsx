import { memo, VFC } from 'react';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { BlurView } from '@react-native-community/blur';
import { AppText } from '@components/AppText';
import { theme } from '@root/styles/theme';

import { styles } from './styles';

interface IProps {
  icon: VFC<SvgProps>;
  title: string;
}

export const TooltipItem = memo((props: IProps) => {
  const { icon: Icon, title } = props;

  return (
    <View style={styles.container}>
      <BlurView blurAmount={5} style={styles.blurView} />
      <Icon width={12} height={12} color={theme.mainBasic} />
      <AppText style={styles.text}>{title}</AppText>
    </View>
  );
});

TooltipItem.displayName = 'TooltipItem';
