import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { user } from '@root/reducers/user';
import { rootSaga } from '@root/sagas/rootSaga';

const reducers = combineReducers({
  user,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
