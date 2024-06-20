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
  target: HTMLElement;
}

const MESSAGES = {
  NO_ELEMENT_SPECIFIED: 'ScrolledEvent.on() requires an element to be specified.',
  NO_SCROLL_EVENT_CALL: 'ScrolledEvent.on() has not been called yet.',
};

const defaultOptions: ScrolledEventOptions = {
  interval: 20,
  element: window,
};

const defaultResponse: EventResponse = {
  target: document.documentElement,
  destroy: () => {
    console.warn(MESSAGES.NO_SCROLL_EVENT_CALL);
  },
};

class ScrolledEvent {
  static on(inCallback: (event: Event) => void, inOptions?: ScrolledEventOptions): EventResponse {
    const { element, interval } = { ...defaultOptions, ...inOptions };
    if (!element) return console.warn(MESSAGES.NO_ELEMENT_SPECIFIED), defaultResponse;

    const target = element instanceof Window ? document.documentElement : element;
    const handleScroll = throttle(inCallback, interval);
    element.addEventListener('scroll', handleScroll);
    return {
      target,
      destroy() {
        element.removeEventListener('scroll', handleScroll);
      },
    };
  }
}

export default ScrolledEvent;
