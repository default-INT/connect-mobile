import { EventType, IAddEventRequest, ICoordinates } from '@root/api/events/dto';
import { date } from '@utils/date';
import { IFormFields } from '../constants';

export const mapToRequest = (form: IFormFields): IAddEventRequest => ({
  title: form.title?.trim() || '',
  description: form.description?.trim(),
  langId: form.lang?.value,
  eventDate: date.addTime(form.eventDate, form.eventTime)?.toISOString() || '',
  coords: form.coords as ICoordinates,
  maxParticipants: Number(form.maxParticipants) || null,
  eventType: form.eventType ?? EventType.Other,
});
