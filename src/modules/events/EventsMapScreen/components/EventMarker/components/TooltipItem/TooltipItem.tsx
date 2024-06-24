import { memo, useMemo, VFC } from 'react';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { BlurView } from '@react-native-community/blur';
import { AppText } from '@components/AppText';
import { theme } from '@root/styles/theme';
import { cn } from '@utils/styleUtils/concat';

import { styles } from './styles';

interface IProps {
  icon: VFC<SvgProps>;
  title: string;
  isPrimary?: boolean;
}

export const TooltipItem = memo((props: IProps) => {
  const { icon: Icon, title, isPrimary } = props;

  const [container, text, size] = useMemo(() => {
    if (!isPrimary) return [styles.container, styles.text, 12];

    return [
      cn(styles.container, styles.primaryContainer),
      cn(styles.text, styles.primaryText),
      16,
    ];
  }, [isPrimary]);

  return (
    <View style={container}>
      {!isPrimary && <BlurView blurAmount={5} style={styles.blurView} />}
      <Icon width={size} height={size} color={theme.mainBasic} />
      <AppText style={text}>{title}</AppText>
    </View>
  );
});

TooltipItem.displayName = 'TooltipItem';
