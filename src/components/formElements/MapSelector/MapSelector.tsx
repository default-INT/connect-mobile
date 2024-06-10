import { StyleProp, TextStyle } from 'react-native';
import { memo, useCallback } from 'react';
import { Field, useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';
import { ICoordinates } from '@root/api/events/dto';
import { Error } from '@components/formElements/Error';
import { MapSelectorField, IMapSelectorProps } from './MapSelectorField';

interface IProps extends IMapSelectorProps {
  formikName?: string;
  errorModifiers?: StyleProp<TextStyle>
}

export const MapSelector = memo((props: IProps) => {
  const { formikName, errorModifiers, ...mapProps } = props;
  const { t } = useTranslation();

  if (!formikName) return <MapSelectorField {...mapProps} />;

  return (
    <Field name={formikName}>
      {({ meta, field }: any) => {
        const { setFieldValue } = useFormikContext();

        const onChange = useCallback((coords: ICoordinates) => {
          setFieldValue(formikName, coords);
        }, [setFieldValue]);

        return (
          <>
            <MapSelectorField
              {...meta}
              {...field}
              onChange={onChange}
              {...mapProps}
            />
            {meta.touched && meta.error && (
              <Error errorMessage={t(meta.error)} modifiers={errorModifiers} />
            )}
          </>
        );
      }}
    </Field>
  );
});

MapSelector.displayName = 'MapSelector';
