import { ILocation } from './ILocation';
import { EventType } from './EventType';

export interface IAddEventRequest {
  title: string;
  description: string | null;
  eventType: EventType;
  finishDate: string;
  maxParticipants?: number;
  lang?: string | null;
  location: ILocation;
}
