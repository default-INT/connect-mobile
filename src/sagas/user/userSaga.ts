import { all, takeLatest } from 'redux-saga/effects';
import { GET_USER_INFO } from '@root/action/user';
import { getUserInfoWorker } from './workers/getUserInfoWorker';

export function* userSaga () {
  yield all([
    takeLatest(GET_USER_INFO, getUserInfoWorker),
  ]);
}
