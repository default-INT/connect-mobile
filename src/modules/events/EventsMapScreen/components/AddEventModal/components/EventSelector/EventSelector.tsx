import { memo, useEffect } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useFormikContext } from 'formik';
import { Error } from '@components/formElements/Error';
import { EventType } from '@root/api/events/dto';
import { isNil } from '@utils/isNil';
import { EventItem } from '../EventItem';
import { IFormFields } from '../../constants';

import { styles } from './styles';

const eventTypeList = Object.keys(EventType)
  .filter(key => Number.isNaN(Number(key)))
  .map(key => EventType[key as keyof typeof EventType]);

export const EventSelector = memo(() => {
  const {
    values: { eventType },
    errors: { eventType: error },
    touched: { eventType: eventTypeTouched },
    setFieldError,
    setFieldTouched,
  } = useFormikContext<IFormFields>();

  const { t } = useTranslation('app', { keyPrefix: 'event_map.create_new_event' });

  useEffect(() => {
    setFieldError(
      'eventType',
      isNil(eventType) ? 'errors.this_field_is_required' : undefined,
    );
    if (!eventType) return;

    return () => {
      if (eventTypeTouched) return;
      setFieldTouched('eventType');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventType, eventTypeTouched]);

  return (
    <View>
      <View style={styles.eventTypeContainer}>
        {eventTypeList.map(key => (<EventItem key={key} type={key} />))}
      </View>
      {error && eventTypeTouched && <Error errorMessage={t(error)} />}
    </View>
  );
});

EventSelector.displayName = 'EventSelector';
