import { memo, useCallback, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import RNDatePicker from 'react-native-date-picker';
import { AppText } from '@components/AppText';
import { date } from '@utils/date';
import { OpacityPressable } from '@components/OpacityPressable';
import { isNil } from '@utils/isNil';
import { cn } from '@utils/styleUtils/concat';
import { styles } from './styles';

export interface IDatePickerProps {
  initialValue?: Date;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  value?: Date | null;
  onChange?: (value: Date) => void;
  onBlur?: () => void;
}

export const DatePickerField = memo((props: IDatePickerProps) => {
  const {
    initialValue,
    placeholder,
    value,
    style,
    onChange,
    onBlur,
  } = props;

  const [isEmpty, setIsEmpty] = useState(isNil(initialValue));
  const [selectedDate, setSelectedDate] = useState(initialValue || new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handlePickerPress = useCallback((pickerDate?: Date) => {
    setIsOpen(false);
    if (onBlur) onBlur();
    if (!pickerDate) return;
    if (onChange) onChange(pickerDate);
    setSelectedDate(pickerDate);
    if (!isEmpty) return;
    setIsEmpty(false);
  }, [isEmpty, onBlur, onChange]);

  const displayValue = value || selectedDate;

  return (
    <View style={cn(styles.container, style)}>
      <OpacityPressable onPress={handleOpen}>
        <>
          {isEmpty && <AppText style={styles.placeholder}>{placeholder}</AppText>}
          {!isEmpty && <AppText>{date.formatDate(displayValue.toISOString())}</AppText>}
        </>
      </OpacityPressable>
      <RNDatePicker
        modal
        open={isOpen}
        date={selectedDate}
        onConfirm={handlePickerPress}
        onCancel={handlePickerPress}
      />
    </View>
  );
});

DatePickerField.displayName = 'DatePickerField';
