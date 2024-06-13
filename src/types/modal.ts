export type TModalCallback = (close: () => void) => void;

export interface IModalProps {
  [key: string]: any;
  modalId: string;
  beforeCloseCallback?: TModalCallback;
  preventCloseOnDimmerClick?: boolean;
  hideDimmer?: boolean;
  preventCloseByHistoryChange?: boolean;
  baseHeight?: number;
  autoHeight?: boolean;
}

export interface IModal {
  component: (props: any) => JSX.Element;
  isRemoved: boolean;
  modalProps: IModalProps;
  beforeCloseCallback?: TModalCallback;
}

export interface ICallbackPayload {
  modalId: string;
  cb: TModalCallback;
}
