import { ICoordinates } from '@root/api/events/dto/ICoordinates';
import { ILanguageDto } from '@root/api/languages/dto';
import { IUserDto } from '@root/api/auth/accounts/dto';
import { EventType } from './EventType';

export interface IEventDto {
  id: number;
  title: string;
  eventType: EventType;
  coords: ICoordinates | null;
  eventDate: string;
  lang?: ILanguageDto | null;
  maxParticipants?: number | null;
  description?: string | null;
  ownerId: number;
  owner: IUserDto | null;
}
