import { ComponentProps, memo, useCallback, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import RNDatePicker from 'react-native-date-picker';
import { AppText } from '@components/AppText';
import { date } from '@utils/date';
import { OpacityPressable } from '@components/OpacityPressable';
import { isNil } from '@utils/isNil';
import { cn } from '@utils/styleUtils/concat';
import { TOptions } from '@utils/date/formatDate/formatDate';

import { styles } from './styles';

type TPickerProps = Omit<ComponentProps<typeof RNDatePicker>, 'date'>;

export interface IDatePickerProps extends TPickerProps {
  initialValue?: Date;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  value?: Date | null;
  dateOptions?: TOptions;
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
    dateOptions,
    ...pickerProps
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
  const formatedDate = date.formatDate(displayValue.toISOString(), dateOptions);

  return (
    <View style={cn(styles.container, style)}>
      <OpacityPressable onPress={handleOpen}>
        <>
          {isEmpty && <AppText style={styles.placeholder}>{placeholder}</AppText>}
          {!isEmpty && <AppText>{formatedDate}</AppText>}
        </>
      </OpacityPressable>
      <RNDatePicker
        modal
        open={isOpen}
        date={selectedDate}
        onConfirm={handlePickerPress}
        onCancel={handlePickerPress}
        {...pickerProps}
      />
    </View>
  );
});

DatePickerField.displayName = 'DatePickerField';
