import { actionCreator } from '@utils/actionCreator';
import { IBaseUserInfo } from '@root/types/user';

export const GET_USER_INFO = 'user/GET_USER_INFO';
export const getUserInfo = actionCreator(GET_USER_INFO);

export const SET_USER_INFO = 'user/SET_USER_INFO';
export const setUserInfo = actionCreator<IBaseUserInfo>(SET_USER_INFO);

export const GET_INFO_FAILED = 'user/GET_INFO_FAILED';
export const getInfoFailed = actionCreator(GET_INFO_FAILED);

export const SIGN_OUT = 'user/SIGN_OUT';
export const signOut = actionCreator(SIGN_OUT);
