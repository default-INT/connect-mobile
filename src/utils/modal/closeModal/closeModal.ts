import { removeComponentByIdFromQueue, removeComponentFromQueue } from '@root/action/modal';
import { store, TRootState } from '@root/store';

export const closeModal = (modalId?: string) => {
  if (modalId) {
    const modalQueue = (store.getState() as TRootState).modalQueue;
    const modalItem = modalQueue.find(modal => modal.modalProps.modalId === modalId);

    if (modalItem?.beforeCloseCallback) {
      modalItem.beforeCloseCallback(() => store.dispatch(removeComponentByIdFromQueue(modalId)));
    } else {
      store.dispatch(removeComponentByIdFromQueue(modalId));
    }
  } else {
    store.dispatch(removeComponentFromQueue());
  }
};
