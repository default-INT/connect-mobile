import { ICoordinates } from '@root/api/events/dto/ICoordinates';
import { ILanguageDto } from '@root/api/languages/dto';
import { EventType } from './EventType';

export interface IEventDto {
  id: number;
  title: string;
  eventType: EventType;
  coords: ICoordinates;
  eventDate: string;
  maxParticipants?: number | null;
  description?: string | null;
  lang?: ILanguageDto | null;
}
