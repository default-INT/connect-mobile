import { EventType, IAddEventRequest } from '@root/api/events/dto';
import { IFormFields } from '../constants';

export const mapToRequest = (form: IFormFields): IAddEventRequest => ({
  title: form.title || '',
  description: form.description,
  lang: form.lang,
  finishDate: form.finishDate?.toISOString() || '',
  location: {
    country: 'Bulgaria',
    coords: form.coords,
  },
  eventType: form.eventType || EventType.Other,
});
