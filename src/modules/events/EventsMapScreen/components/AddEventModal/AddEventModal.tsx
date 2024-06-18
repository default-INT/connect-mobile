import { memo, useCallback, useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { Formik, FormikHelpers } from 'formik';
import { AppText } from '@components/AppText';
import { BaseModal } from '@components/BaseModal';
import { IModalProps } from '@root/types/modal';
import { buttonModifiers } from '@components/AppButton';
import { closeModal } from '@utils/modal/closeModal';
import { AppInput } from '@components/formElements/AppInput';
import { MapSelector } from '@components/formElements/MapSelector';
import { TextArea } from '@components/formElements/TextArea';
import { DatePicker } from '@components/formElements/DatePicker';
import { api } from '@root/api';
import { date } from '@utils/date';
import { Select } from '@components/formElements/Select';
import { ISelectOption } from '@components/formElements/Select/types';
import { eventMapPubSub } from '../../utils/eventMapPubSub';
import { IFormFields, initialValues } from './constants';
import { mapToRequest } from './utils/mapToRequest';
import { EventSelector } from './components/EventSelector';
import { getAddEventSchema } from './utils/getEventSchema';

import { styles } from './styles';

type THelpers = FormikHelpers<IFormFields>;

interface IProps extends IModalProps {

}

export const AddEventModal = memo((props: IProps) => {
  const { modalId } = props;
  const { t } = useTranslation(['app', 'common'], { keyPrefix: 'event_map.create_new_event' });
  const [isDisabled, setIsDisabled] = useState(false);
  const [languageList, setLanguageList] = useState<ISelectOption<number>[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const langListRes = await api.languages.getList();
        const optionList = langListRes.map(item => ({ value: item.id, title: item.nativeName }));
        setLanguageList(optionList);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    })();
  }, []);

  const handleAddEvent = useCallback(async (values: IFormFields, helpers: THelpers) => {
    setIsDisabled(true);
    const { setFieldError } = helpers;
    try {
      const currDate = date.addTime(values.eventDate, values.eventTime);
      if (!currDate || currDate < new Date()) {
        return setFieldError('eventTime', t('errors.date.min_date'));
      }
      const data = mapToRequest(values);
      await api.events.addEvent(data);
      eventMapPubSub.notify();
      closeModal(modalId);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error((e as any).message);
      Alert.alert('Error', t('errors.common'));
    } finally {
      setIsDisabled(false);
    }
  }, [modalId, t]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAddEvent}
      validationSchema={getAddEventSchema()}
    >
      {({ handleSubmit }) => (
        <BaseModal
          modalId={modalId}
          title={t('title')}
          buttons={[
            {
              title: t('buttons.close'),
              style: buttonModifiers.secondaryButton,
              textStyle: buttonModifiers.primaryText,
              onPress: () => closeModal(modalId),
            },
            {
              title: t('buttons.add'),
              disabled: isDisabled,
              onPress: () => handleSubmit(),
            },
          ]}
        >
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <AppText>{t('description')}</AppText>
              <AppInput
                formikName='title'
                placeholder={t('fields.title.placeholder')}
              />
              <AppText>{t('fields.event_type.label')}</AppText>
              <EventSelector />
              <AppText>{t('fields.location.label')}</AppText>
              <MapSelector formikName='coords' modalTitle={t('fields.location.label')} />
              <AppText>{t('fields.dates.label')}</AppText>
              <View style={styles.dateContainer}>
                <DatePicker
                  formikName='eventDate'
                  placeholder={t('fields.event_date.placeholder')}
                  minimumDate={new Date()}
                  dateOptions={date.options.shortD()}
                  mode='date'
                  formikModifiers={styles.input}
                  style={styles.input}
                />
                <DatePicker
                  formikName='eventTime'
                  placeholder={t('fields.event_time.placeholder')}
                  dateOptions={date.options.shortT()}
                  mode='time'
                  formikModifiers={styles.input}
                  style={styles.input}
                />
              </View>
              <View style={styles.field}>
                <AppText>{t('fields.lang.label')}</AppText>
                <AppText style={styles.optionalText}>{t('optional')}</AppText>
              </View>
              <Select
                formikName='lang'
                modalTitle={t('fields.lang.label')}
                items={languageList}
                placeholder={t('fields.lang.placeholder')}
              />
              <View style={styles.field}>
                <AppText>{t('fields.max_participants.label')}</AppText>
                <AppText style={styles.optionalText}>{t('optional')}</AppText>
              </View>
              <AppInput
                formikName='maxParticipants'
                keyboardType='numeric'
                placeholder={t('fields.max_participants.placeholder')}
              />
              <View style={styles.field}>
                <AppText>{t('fields.description.label')}</AppText>
                <AppText style={styles.optionalText}>{t('optional')}</AppText>
              </View>
              <TextArea
                formikName='description'
                numberOfLines={6}
                placeholder={t('fields.description.placeholder')}
              />
            </View>
          </KeyboardAwareScrollView>
        </BaseModal>
      )}
    </Formik>
  );
});

AddEventModal.displayName = 'AddEventModal';
