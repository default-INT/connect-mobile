import { memo, useMemo } from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Field } from 'formik';
import { cn } from '@utils/styleUtils/concat';
import { Error } from '../Error';
import { IAppInputFieldProps, AppInputField } from './AppInputField';

import { styles } from './styles';

export interface IAppInputProps extends IAppInputFieldProps {
  formikName?: string;
  errorModifiers?: StyleProp<TextStyle>;
  formikModifiers?: StyleProp<ViewStyle>;
}

export const AppInput = memo((props: IAppInputProps) => {
  const { formikName, errorModifiers, formikModifiers } = props;
  const { t } = useTranslation();

  if (!formikName) return <AppInputField {...props} />;

  return (
    <Field name={formikName}>
      {({ field, meta }: any) => {
        const { onChange, onBlur, ...fieldProps } = field;
        const onChangeText = useMemo(() => onChange(formikName), [onChange]);
        const onBlurWrap = useMemo(() => onBlur(formikName), [onBlur]);

        return (
          <View style={cn(styles.formikContainer, formikModifiers)}>
            <AppInputField
              {...meta}
              {...fieldProps}
              onChangeText={onChangeText}
              onBlur={onBlurWrap}
              {...props}
            />
            {meta.touched && meta.error && (
              <Error errorMessage={t(meta.error)} modifiers={errorModifiers} />
            )}
          </View>
        );
      }}
    </Field>
  );
});

AppInput.displayName = 'AppInput';
