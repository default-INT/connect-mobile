type TListener = (data: any) => void;

export class PublisherSubscriber {
  listeners: (TListener) [];

  constructor () {
    this.listeners = [];
  }

  notify = (data?: any) => {
    this.listeners.forEach(listener => {
      listener(data);
    });
  };

  subscribe = (fn: TListener) => {
    this.listeners.push(fn);

    return () => this.unsubscribe(fn);
  };

  unsubscribe = (fn: TListener) => {
    this.listeners = this.listeners.filter(item => item !== fn);
  };
}
