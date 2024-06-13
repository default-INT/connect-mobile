import {
  CLEAR_QUEUE,
  REMOVE_CALLBACK,
  REMOVE_COMPONENT,
  REMOVE_COMPONENT_BY_ID, REMOVE_FROM_QUEUE_BY_ID,
  RESET,
  SET_CALLBACK, SET_COMPONENT,
} from '@root/action/modal';
import { ICallbackPayload, IModal } from '@root/types/modal';
import { IAction } from '@root/types/action';

export type TModalQueueState = IModal[] | [];

const initialState: TModalQueueState = [];

export const modalQueue = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action: IAction<Object>,
): TModalQueueState => {
  switch (action.type) {
    case SET_COMPONENT:
      return [...state, action.payload as IModal];
    case REMOVE_COMPONENT: {
      const lastItem = state[state.length - 1];

      return [...state.slice(0, -1), { ...lastItem, isRemoved: true }];
    }
    case REMOVE_COMPONENT_BY_ID:
      return state.map(modalItem => {
        if (modalItem.modalProps.modalId !== (action.payload as string)) return modalItem;

        return { ...modalItem, isRemoved: true };
      });
    case SET_CALLBACK:
      return state.map((modalItem: IModal) => {
        const { modalId, cb } = action.payload as ICallbackPayload;

        if (modalItem.modalProps.modalId === modalId) {
          return {
            ...modalItem,
            beforeCloseCallback: cb,
          };
        }

        return modalItem;
      });
    case REMOVE_CALLBACK:
      return state.map((modalItem: IModal) => {
        if (modalItem.modalProps.modalId === action.payload) {
          return {
            ...modalItem,
            beforeCloseCallback: undefined,
          };
        }

        return modalItem;
      });
    case REMOVE_FROM_QUEUE_BY_ID:
      return state.filter(modalItem => modalItem.modalProps.modalId !== (action.payload as string));
    case CLEAR_QUEUE:
      return [];
    case RESET:
      return initialState;
    default:
      return state;
  }
};
