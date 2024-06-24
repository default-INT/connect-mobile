import { IEventDto } from '@root/api/events/dto';
import { TFunction } from 'i18next';
import { iconByType } from '@constants/iconByType';
import { CalendarDatesIcon, Map360Icon, TimeIcon, UserIcon } from '@root/assets/icons';
import { formatDate } from '@utils/date/formatDate';
import { formatOptions } from '@utils/date/formatDate/constants';

export const getMetadata = (event: IEventDto, t: TFunction) => [
  {
    icon: iconByType[event.eventType],
    title: t(`common:event_types.${event.eventType}`),
  },
  {
    icon: CalendarDatesIcon,
    title: formatDate(event.eventDate, { ...formatOptions.fullD, delimiter: '.' }),
  },
  {
    icon: TimeIcon,
    title: formatDate(event.eventDate, formatOptions.shortT),
  },
  event.lang ? {
    icon: Map360Icon,
    title: event.lang.code,
  } : null,
  event.maxParticipants ? {
    icon: UserIcon,
    title: t('app:event_map.markers.people', { value: event.maxParticipants }),
  } : null,
];
