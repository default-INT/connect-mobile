import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Callout } from 'react-native-maps';
import { View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { AppText } from '@components/AppText';
import { IEventDto } from '@root/api/events/dto';
import { iconByType } from '@constants/iconByType';
import { CalendarDatesIcon, Map360Icon, TimeIcon, UserIcon } from '@root/assets/icons';
import { formatDate } from '@utils/date/formatDate';
import { formatOptions } from '@utils/date/formatDate/constants';
import { showModal } from '@utils/modal/showModal';
import { BaseModal } from '@components/BaseModal';
import { TooltipItem } from '../TooltipItem';

import { styles } from './styles';

interface IProps {
  event: IEventDto;
}

export const EventTooltip = memo((props: IProps) => {
  const { event } = props;
  const { t } = useTranslation();

  const handlePress = useCallback(() => {
    showModal(BaseModal, { title: event.title });
  }, [event.title]);

  const contentTooltips = useMemo(() => [
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
  ], [event, t]);

  return (
    <Callout tooltip onPress={handlePress}>
      <View style={styles.container}>
        <BlurView blurAmount={5} style={styles.blurView} />
        <AppText style={styles.title}>{event.title}</AppText>
        <View style={styles.content}>
          {contentTooltips.map((item, idx) => item && (
            <TooltipItem key={`${idx + item.title}`} {...item} />
          ))}
        </View>
      </View>
    </Callout>
  );
});

EventTooltip.displayName = 'EventTooltip';
