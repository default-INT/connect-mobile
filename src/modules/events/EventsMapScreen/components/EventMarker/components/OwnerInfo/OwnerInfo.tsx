import { memo } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { IUserDto } from '@root/api/auth/accounts/dto';
import { AppText } from '@components/AppText';
import { Avatar } from '@components/Avatar';

import { styles } from './styles';

interface IProps {
  owner: IUserDto;
}

export const OwnerInfo = memo((props: IProps) => {
  const { owner } = props;
  const { t } = useTranslation('app', { keyPrefix: 'event_map.event_info' });

  return (
    <View style={styles.container}>
      {owner.avatar && <Avatar uri={owner.avatar} />}
      <View style={styles.info}>
        <AppText style={styles.fullNameText}>{`${owner.firstName} ${owner.lastName}`}</AppText>
        <AppText style={styles.text}>{t('age', { age: '-' })}</AppText>
      </View>
    </View>
  );
});

OwnerInfo.displayName = 'OwnerInfo';
