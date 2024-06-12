import { ICoordinates } from '@root/api/events/dto/ICoordinates';
import { EventType } from './EventType';

export interface IEventDto {
  id: number;
  title: string;
  eventType: EventType;
  coords: ICoordinates;
  eventDate: string;
  maxParticipants?: number | null;
  description?: string | null;
  lang?: string | null;
}
