import { actionCreator } from '@utils/actionCreator';
import { ICallbackPayload, IModal } from '@root/types/modal';

export const SET_COMPONENT = 'modal/SET_COMPONENT';
export const updateComponentQueue = actionCreator<IModal>(SET_COMPONENT);

export const REMOVE_COMPONENT = 'modal/REMOVE_COMPONENT';
export const removeComponentFromQueue = actionCreator<undefined>(REMOVE_COMPONENT);

export const REMOVE_COMPONENT_BY_ID = 'modal/REMOVE_COMPONENT_BY_ID';
export const removeComponentByIdFromQueue = actionCreator<string>(REMOVE_COMPONENT_BY_ID);

export const REMOVE_FROM_QUEUE_BY_ID = 'modal/REMOVE_FROM_QUEUE_BY_ID';
export const removeFromQueueById = actionCreator<string>(REMOVE_FROM_QUEUE_BY_ID);

export const CLEAR_QUEUE = 'modal/CLEAR_QUEUE';
export const clearQueue = actionCreator<undefined>(CLEAR_QUEUE);

export const SET_CALLBACK = 'modal/SET_CALLBACK';
export const setBeforeCloseCallback = actionCreator<ICallbackPayload>(SET_CALLBACK);

export const REMOVE_CALLBACK = 'modal/REMOVE_CALLBACK';
export const removeBeforeCloseCallback = actionCreator<string>(REMOVE_CALLBACK);

export const RESET = 'modal/RESET';
export const reset = actionCreator(RESET);
