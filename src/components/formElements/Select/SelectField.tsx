import { memo, useCallback, useState } from 'react';
import { ISelectOption } from '@components/formElements/Select/types';
import { OpacityPressable } from '@components/OpacityPressable';
import { AppText } from '@components/AppText';
import { showModal } from '@utils/modal/showModal';
import { closeModal } from '@utils/modal/closeModal';
import { SelectOptionModal } from './components/SelectOptionModal';

import { styles } from './styles';

export interface ISelectFieldProps {
  items: ISelectOption[] | null;
  initialValue?: ISelectOption | null;
  value?: ISelectOption | null;
  modalTitle?: string;
  placeholder?: string;
  onChange?: (value: ISelectOption | null) => void;
  onBlur?: () => void;
}

export const SelectField = memo((props: ISelectFieldProps) => {
  const {
    initialValue,
    value,
    placeholder,
    modalTitle,
    items,
    onChange,
    onBlur,
  } = props;

  const [selectedValue, setSelectedValue] = useState(initialValue || null);
  const displayValue = value?.title || selectedValue?.title;

  const handleSelect = useCallback((optionValue: ISelectOption) => {
    const newVal = optionValue.value === selectedValue?.value ? null : optionValue;
    if (onChange) onChange(newVal);
    setSelectedValue(newVal);
    closeModal();
  }, [onChange, selectedValue?.value]);

  const handlePress = useCallback(() => {
    showModal(SelectOptionModal, {
      modalTitle,
      items,
      onSelect: handleSelect,
      selected: selectedValue,
    });
  }, [items, modalTitle, handleSelect, selectedValue]);

  return (
    <OpacityPressable style={styles.container} onPress={handlePress} onBlur={onBlur}>
      {displayValue && <AppText>{displayValue}</AppText>}
      {!displayValue && <AppText style={styles.placeholder}>{placeholder}</AppText>}
    </OpacityPressable>
  );
});

SelectField.displayName = 'SelectField';
