const throttle = (fn: Function, wait: number = 100) => {
  let timeout = 0;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
};

export interface ScrolledEventOptions {
  interval?: number;
  element?: HTMLElement | Window;
}

export interface EventResponse {
  destroy: () => void;
  target: HTMLElement | Window;
}

const defaultOptions: ScrolledEventOptions = {
  interval: 20,
  element: window,
};

class ScrolledEvent {
  static on(inCallback: (event: Event) => void, inOptions?: ScrolledEventOptions): EventResponse {
    const { element, interval } = { ...defaultOptions, ...inOptions };
    const target = element instanceof Window ? document.documentElement : element!;
    const handleScroll = throttle(inCallback, interval);
    element?.addEventListener('scroll', handleScroll);
    return {
      target,
      destroy() {
        element?.removeEventListener('scroll', handleScroll);
      },
    };
  }
}

export default ScrolledEvent;
