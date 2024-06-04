import { createSelector } from 'reselect';
import { TRootState } from '@root/store';

const getModalQueueState = (state: TRootState) => state.modalQueue;

export const getModalQueue = createSelector(
  getModalQueueState,
  modalQueue => modalQueue,
);
