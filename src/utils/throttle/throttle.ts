export const throttle = (func: Function, ms: number) => {
  let isThrottled = false;
  let savedArgs: any;
  let savedThis: any;

  return function wrapper (this: any, ...args: any[]) {
    if (isThrottled) {
      savedArgs = args;
      savedThis = this;

      return;
    }

    func.apply(this, args);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms);
  };
};
