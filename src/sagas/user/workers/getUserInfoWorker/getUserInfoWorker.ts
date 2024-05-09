import { put, call } from 'redux-saga/effects';
import { getInfoFailed, setUserInfo, signOut } from '@root/action/user';
import { api } from '@root/api';
import { IUserDto } from '@root/api/auth/accounts/dto';

export function* getUserInfoWorker () {
  try {
    const userState: IUserDto = yield call(api.auth.accounts.getCurrentUser);
    yield put(setUserInfo(userState));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    yield put(getInfoFailed());
    yield put(signOut());
  }
}
