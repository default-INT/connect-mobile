import { memo, useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { signOut } from '@root/action/user';
import { AppText } from '@components/AppText';
import { AppButton } from '@components/AppButton';
import { storage } from '@utils/storage';

export const ChatScreen = memo(() => {
  const dispatch = useDispatch();

  const handlePress = useCallback(() => {
    storage.removeTokens();
    dispatch(signOut());
  }, [dispatch]);

  return (
    <View>
      <AppText>ChatScreen</AppText>
      <AppButton title='log out' onPress={handlePress} />
    </View>
  );
});

ChatScreen.displayName = 'ChatScreen';
