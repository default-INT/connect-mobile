import { IUserState } from '@root/types/user';
import { GET_USER_INFO, SET_USER_INFO, SIGN_OUT } from '@root/action/user';

const initialState: IUserState = {
  isLoading: false,
  isAuthorized: false,
  id: -1,
  firstName: null,
  lastName: null,
  friendlyName: null,
  avatar: null,
};

/* eslint-disable-next-line @typescript-eslint/default-param-last */
export const user = (state = initialState, action: any): IUserState => {
  const { payload, type } = action || {};
  switch (type) {
    case GET_USER_INFO: {
      return {
        isLoading: true,
        ...payload,
      };
    }
    case SET_USER_INFO: {
      return {
        isAuthorized: true,
        isLoading: false,
        ...payload,
      };
    }
    case SIGN_OUT: {
      return initialState;
    }
    default:
      return state;
  }
};
