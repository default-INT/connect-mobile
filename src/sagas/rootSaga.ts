import { all } from 'redux-saga/effects';
import { userSaga } from '@root/sagas/user';

export function* rootSaga () {
  yield all([
    userSaga(),
  ]);
}
