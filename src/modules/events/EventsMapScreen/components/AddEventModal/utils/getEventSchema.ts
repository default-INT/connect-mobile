import * as Yup from 'yup';

export const getAddEventSchema = () => Yup.object().shape({
  title: Yup.string()
    .trim()
    .required('app:event_map.create_new_event.errors.this_field_is_required'),
  eventDate: Yup.date()
    .min(new Date(), 'app:event_map.create_new_event.errors.date.min_date')
    .required('app:event_map.create_new_event.errors.this_field_is_required'),
  eventTime: Yup.date()
    .required('app:event_map.create_new_event.errors.this_field_is_required'),
  coords: Yup.object()
    .required('app:event_map.create_new_event.errors.this_field_is_required'),
  lang: Yup.string().nullable(),
  maxParticipants: Yup.number().nullable(),
  description: Yup.string().nullable()
    .max(500, 'app:event_map.create_new_event.errors.description.max'),
});
