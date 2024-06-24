import { memo, PropsWithChildren, VFC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { IModalProps } from '@root/types/modal';
import { cn } from '@utils/styleUtils/concat';
import { AppText } from '@components/AppText';
import { AppButton, buttonModifiers, IAppButtonProps } from '@components/AppButton';
import { s } from '@utils/scaleUtils/scale';
import { IconButton } from '@components/IconButton';
import { theme } from '@root/styles/theme';

import { styles } from './styles';

export interface IModalButton extends IAppButtonProps {
  key?: string;
}

interface IProps extends IModalProps {
  title?: string;
  buttons?: IModalButton[];
  bodyStyle?: StyleProp<ViewStyle>;
  buttonContentStyle?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  rightIcon?: VFC<SvgProps> | null;
  rightBtnPress?: () => void;
}

export const BaseModal = memo((props: PropsWithChildren<IProps>) => {
  const {
    title,
    children,
    buttons,
    bodyStyle,
    buttonContentStyle,
    rightIcon: RightIcon,
    rightBtnPress,
    headerStyle,
  } = props;

  const paddingBottom = buttons ? s.height(100) : s.height(30);

  return (
    <>
      <View style={[styles.body, { paddingBottom }, bodyStyle]}>
        {title && (
          <View style={styles.header}>
            <AppText style={cn(styles.title, headerStyle)} numberOfLines={1}>{title}</AppText>
            {RightIcon && (
              <IconButton
                icon={RightIcon}
                onPress={rightBtnPress}
                iconProps={{ width: 24, height: 24, color: theme.mainExtra }}
              />
            )}
          </View>
        )}
        {children}
      </View>
      {buttons && (
        <View style={cn(styles.buttonContainer, buttonContentStyle)}>
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
