import { memo, useCallback } from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Field, useFormikContext } from 'formik';
import { Error } from '@components/formElements/Error';
import { ISelectFieldProps, SelectField } from './SelectField';
import { ISelectOption } from './types';

interface IProps extends ISelectFieldProps {
  formikName?: string;
  errorModifiers?: StyleProp<TextStyle>;
  formikModifiers?: StyleProp<ViewStyle>;
}

export const Select = memo((props: IProps) => {
  const { formikName, errorModifiers, formikModifiers, ...selectProps } = props;
  const { t } = useTranslation();

  if (!formikName) return <SelectField {...selectProps} />;

  return (
    <Field name={formikName}>
      {({ meta, field }: any) => {
        const { setFieldTouched, setFieldValue } = useFormikContext();

        const onChange = useCallback((option: ISelectOption) => {
          setFieldValue(formikName, option);
        }, [setFieldValue]);

        const onBlur = useCallback(() => {
          setFieldTouched(formikName, true);
        }, [setFieldTouched]);

        return (
          <View style={formikModifiers}>
            <SelectField
              {...meta}
              {...field}
              onBlur={onBlur}
              onChange={onChange}
              {...selectProps}
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

Select.displayName = 'Select';
