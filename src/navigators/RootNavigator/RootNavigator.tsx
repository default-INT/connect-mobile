import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthNavigator } from '@root/navigators/AuthNavigator';
import { getUser } from '@root/selectors/getUser';
import { Preloader } from '@components/Preloader';
import { storage } from '@utils/storage';
import { getUserInfo } from '@root/action/user';
import { AppNavigator } from '@root/navigators/AppNavigator';

export const RootNavigator = memo(() => {
  const [isTokenLoading, setIsTokenLoading] = useState(false);
  const dispatch = useDispatch();
  const { isAuthorized, isLoading } = useSelector(getUser);
  const isAppLoading = !isTokenLoading || isLoading;

  useEffect(() => {
    (async () => {
      const tokens = await storage.getTokens();
      if (!isLoading && !isAuthorized && tokens) {
        dispatch(getUserInfo() as any);
      }
      setIsTokenLoading(true);
    })();
    // At the first render we will get stored tokens and try to load user data
    // If user is not authorized - will show login form
    // This validation will be done only once, in all another cases
    // we will caught tokens change in effect and load user/logout by theirs events
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isAppLoading) return <Preloader />;
  if (isAuthorized) return <AppNavigator />;

  return <AuthNavigator />;
});

RootNavigator.displayName = 'RootNavigator';
