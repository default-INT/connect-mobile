interface IOptions {
  trail?: boolean;
  lead?: boolean;
}

const baseOptions = { trail: true, lead: true };

export const debounce = (func: Function, ms: number, options: IOptions = {}) => {
  const computedOptions = { ...baseOptions, ...options };
  let isDebounced = false;
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let savedArgs: any;
  let savedThis: any;

  return function wrapper (this: any, ...args: any) {
    savedArgs = args;
    savedThis = this;

    if (computedOptions.lead && !isDebounced) func.apply(savedThis, args);

    isDebounced = true;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      isDebounced = false;
      if (savedArgs && computedOptions.trail) {
        func.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms);
  };
};
