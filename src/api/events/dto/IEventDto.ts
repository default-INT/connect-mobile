import { ILocation } from './ILocation';
import { EventType } from './EventType';

export interface IEventDto {
  id: number;
  title: string;
  description: string;
  eventType: EventType;
  finishDate: string;
  maxParticipants?: number | null;
  lang?: string | null;
  location: ILocation;
}
