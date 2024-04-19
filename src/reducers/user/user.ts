import { IUserState } from '@root/types/user';
import { SET_USER_INFO, SIGN_OUT } from '@root/action/user';
import { storage } from '@utils/storage';

const initialState: IUserState = {
  isLoading: false,
  isAuthorized: false,
  id: -1,
  firstName: null,
  lastName: null,
  friendlyName: null,
  avatar: null,
  roles: [],
};

/* eslint-disable-next-line @typescript-eslint/default-param-last */
export const user = (state = initialState, action: any): IUserState => {
  const { payload, type } = action || {};
  switch (type) {
    case SET_USER_INFO: {
      // TODO: it`s temporary solution, in future will be removed
      storage.setUserMock({
        isAuthorized: true,
        ...payload,
      });

      return {
        isAuthorized: true,
        ...payload,
      };
    }
    case SIGN_OUT: {
      // TODO: it`s temporary solution, in future will be removed
      storage.removeUserMock();

      return initialState;
    }
    default:
      return state;
  }
};
