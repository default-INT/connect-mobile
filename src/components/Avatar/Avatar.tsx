import { memo, useMemo } from 'react';
import { Image, View } from 'react-native';
import { cn } from '@utils/styleUtils/concat';
import { s } from '@utils/scaleUtils/scale';

import { styles } from './styles';

interface IProps {
  uri?: string | null;
  size?: number;
}

export const Avatar = memo((props: IProps) => {
  const { uri, size = s.max(80) } = props;

  const container = useMemo(() => ({
    width: size,
    height: size,
    borderRadius: size / 2,
  }), [size]);

  const avatar = useMemo(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <View style={cn(styles.container, container)}>
      {uri && <Image style={avatar} source={{ uri }} />}
    </View>
  );
});

Avatar.displayName = 'Avatar';
