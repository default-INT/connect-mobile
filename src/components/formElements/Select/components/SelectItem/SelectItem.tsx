import { memo, useCallback } from 'react';
import { ISelectOption } from '@components/formElements/Select/types';
import { OpacityPressable } from '@components/OpacityPressable';
import { AppText } from '@components/AppText';
import { CheckMarkIcon } from '@root/assets/icons';
import { theme } from '@root/styles/theme';
import { s } from '@utils/scaleUtils/scale';

import { styles } from './styles';

interface IProps {
  selected?: boolean;
  onSelect: (value: ISelectOption) => void;
  value: ISelectOption;
}

const iconSize = s.max(20);

export const SelectItem = memo((props: IProps) => {
  const { selected, value, onSelect } = props;

  const handleHandlePress = useCallback(() => {
    onSelect(value);
  }, [onSelect, value]);

  return (
    <OpacityPressable style={styles.container} onPress={handleHandlePress}>
      <AppText style={styles.text}>{value.title}</AppText>
      {selected && (
        <CheckMarkIcon
          width={iconSize}
          height={iconSize}
          color={theme.neutralSecondary}
        />
      )}
    </OpacityPressable>
  );
});

SelectItem.displayName = 'SelectItem';
