import { put, call } from 'redux-saga/effects';
import { getInfoFailed, setUserInfo } from '@root/action/user';
import { storage } from '@utils/storage';

export function* getUserInfoWorker () {
  try {
    // TODO: Implement backend
    // @ts-ignore
    const userState = yield call(storage.getUserMock);
    yield put(setUserInfo(userState));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    yield put(getInfoFailed());
  }
}
