import { memo, useCallback } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { BaseModal } from '@components/BaseModal';
import { IModalProps } from '@root/types/modal';
import { SelectItem } from '../SelectItem';
import { ISelectOption } from '../../types';

interface IProps extends IModalProps {
  modalTitle?: string;
  items?: ISelectOption[] | null;
  onSelect: (value: ISelectOption) => void;
  selected?: ISelectOption | null;
}

export const SelectOptionModal = memo((props: IProps) => {
  const { items, modalId, modalTitle, onSelect, selected } = props;

  const renderItem = useCallback(({ item }: ListRenderItemInfo<ISelectOption>) => (
    <SelectItem onSelect={onSelect} value={item} selected={selected?.value === item.value} />
  ), [onSelect, selected?.value]);

  return (
    <BaseModal
      modalId={modalId}
      title={modalTitle}
    >
      <FlatList
        data={items}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ value, title }) => `${value + title}`}
        renderItem={renderItem}
      />
    </BaseModal>
  );
});

SelectOptionModal.displayName = 'SelectOptionModal';
