import { EventType, ICoordinates } from '@root/api/events/dto';

export interface IFormFields {
  title: string | null;
  eventType: EventType | null;
  startDate: Date | null;
  finishDate: Date | null;
  coords: ICoordinates | null;
  lang: string | null;
  maxParticipants: number | null;
  description: string | null;
}

export const initialValues: IFormFields = {
  title: null,
  eventType: null,
  startDate: null,
  finishDate: null,
  coords: null,
  lang: null,
  maxParticipants: null,
  description: null,
};
