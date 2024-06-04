import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { user } from '@root/reducers/user';
import { modalQueue } from '@root/reducers/modal';
import { rootSaga } from '@root/sagas/rootSaga';

const reducers = combineReducers({
  user,
  modalQueue,
});

export type TRootState = ReturnType<typeof reducers>;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
