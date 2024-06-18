import { EventType, ICoordinates } from '@root/api/events/dto';
import { ISelectOption } from '@components/formElements/Select/types';

export interface IFormFields {
  title: string | null;
  eventType: EventType | null;
  eventDate: Date | null;
  eventTime: Date | null;
  coords: ICoordinates | null;
  lang: ISelectOption<number> | null;
  maxParticipants: number | null;
  description: string | null;
}

export const initialValues: IFormFields = {
  title: null,
  eventType: null,
  eventDate: null,
  eventTime: null,
  coords: null,
  lang: null,
  maxParticipants: null,
  description: null,
};
