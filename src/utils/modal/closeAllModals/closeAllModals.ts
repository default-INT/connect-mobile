import { store } from '@root/store';
import { clearQueue } from '@root/action/modal';

export const closeAllModals = () => store.dispatch(clearQueue());
