import { updateComponentQueue } from '@root/action/modal';
import { store } from '@root/store';

export type TComponent = (props: any) => JSX.Element;

export interface IProps {
  [key: string]: any;
  beforeCloseCallback?: (closeFn: () => void) => void;
  autoHeight?: boolean;
}

export const showModal = (component: TComponent, props: IProps = {}) => {
  const modalId = Math.floor(Math.random() * 100).toString();

  const modalProps = {
    ...props,
    modalId,
    autoHeight: props?.autoHeight,
  };

  store.dispatch(
    updateComponentQueue({
      component,
      modalProps,
      beforeCloseCallback: props.beforeCloseCallback,
    }),
  );

  return modalId;
};
