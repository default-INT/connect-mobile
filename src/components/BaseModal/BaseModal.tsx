import { memo, PropsWithChildren } from 'react';
import { View } from 'react-native';
import { IModalProps } from '@root/types/modal';
import { cn } from '@utils/styleUtils/concat';
import { AppText } from '@components/AppText';
import { AppButton, buttonModifiers, IAppButtonProps } from '@components/AppButton';
import { s } from '@utils/scaleUtils/scale';

import { styles } from './styles';

export interface IModalButton extends IAppButtonProps {
  key?: string;
}

interface IProps extends IModalProps {
  title?: string;
  buttons?: IModalButton[];
}

export const BaseModal = memo((props: PropsWithChildren<IProps>) => {
  const {
    title,
    children,
    buttons,
  } = props;

  const paddingBottom = buttons ? s.height(100) : s.height(30);

  return (
    <>
      <View style={cn(styles.body, { paddingBottom })}>
        {title && <AppText style={styles.title}>{title}</AppText>}
        {children}
      </View>
      {buttons && (
        <View style={styles.buttonContainer}>
          {buttons?.map((item, idx) => (
            <AppButton
              key={item.key || `${idx}`}
              {...item}
              style={cn(item.style, buttonModifiers.buttonFlex)}
            />
          ))}
        </View>
      )}
    </>
  );
});

BaseModal.displayName = 'BaseModal';
