import { call } from 'redux-saga/effects';
import { storage } from '@utils/storage';

export function* signOutWorker () {
  yield call(storage.removeTokens);
}
