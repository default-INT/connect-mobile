import { ICoordinates } from '@root/api/events/dto/ICoordinates';
import { EventType } from './EventType';

export interface IAddEventRequest {
  title: string;
  eventType: EventType;
  eventDate: string;
  coords: ICoordinates;
  maxParticipants?: number | null;
  description?: string | null;
  langId?: number | null;
}
