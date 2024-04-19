import { createSelector } from 'reselect';
import { IUserState } from '@root/types/user';

interface IState {
  user: IUserState;
}

const getUserState = (state: IState) => state.user;

export const getUserIsAuthorized = createSelector(
  (state: IState) => state.user?.isAuthorized,
  isAuthorized => isAuthorized,
);

export const getUser = createSelector(
  getUserState,
  userState => userState,
);
