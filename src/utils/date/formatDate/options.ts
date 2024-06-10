import { formatOptions } from './constants';

type TOp = {
  [Property in keyof typeof formatOptions]: TFn;
};

type TFn = TOp & {
  (rewriteOptions?: Intl.DateTimeFormatOptions): Intl.DateTimeFormatOptions;
  values: Intl.DateTimeFormatOptions;
};

export const options: TFn = new Proxy((() => {}) as TFn, {
  get: (ref, key: keyof typeof formatOptions) => {
    if (key in formatOptions) {
      // eslint-disable-next-line no-param-reassign
      ref.values = { ...ref.values, ...formatOptions[key] };
    }

    return options;
  },
  apply: (ref, _, args) => {
    const mergedArgs = args.reduce((acc, arg) => ({ ...acc, ...arg }), {});
    const values = ref.values;
    // eslint-disable-next-line no-param-reassign
    ref.values = {};

    return { ...values, ...mergedArgs };
  },
});
