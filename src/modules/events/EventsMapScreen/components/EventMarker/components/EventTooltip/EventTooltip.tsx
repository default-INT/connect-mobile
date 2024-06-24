import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Callout } from 'react-native-maps';
import { View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { AppText } from '@components/AppText';
import { IEventDto } from '@root/api/events/dto';
import { showModal } from '@utils/modal/showModal';
import { getMetadata } from '../utils/getMetadata';
import { TooltipItem } from '../TooltipItem';
import { EventInfoModal } from '../EventInfoModal';

import { styles } from './styles';

interface IProps {
  event: IEventDto;
}

export const EventTooltip = memo((props: IProps) => {
  const { event } = props;
  const { t } = useTranslation();

  const handlePress = useCallback(() => {
    showModal(EventInfoModal, { event, baseHeight: 650 });
  }, [event]);

  const contentTooltips = useMemo(() => getMetadata(event, t), [event, t]);

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
