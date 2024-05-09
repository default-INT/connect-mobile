import { all, takeLatest } from 'redux-saga/effects';
import { GET_USER_INFO, SIGN_OUT } from '@root/action/user';
import { signOutWorker } from './workers/signOutWorker';
import { getUserInfoWorker } from './workers/getUserInfoWorker';

export function* userSaga () {
  yield all([
    takeLatest(GET_USER_INFO, getUserInfoWorker),
    takeLatest(SIGN_OUT, signOutWorker),
  ]);
}
