# scrolled-event
> Scrolled event.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/scrolled-event
```

## usage
```js
import ScrolledEvent from '@jswork/scrolled-event';

ScrolledEvent.on((event) => {
  console.log(event);
}, { element: window, interval: 100 });
```

## license
Code released under [the MIT license](https://github.com/afeiship/scrolled-event/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/scrolled-event
[version-url]: https://npmjs.org/package/@jswork/scrolled-event

[license-image]: https://img.shields.io/npm/l/@jswork/scrolled-event
[license-url]: https://github.com/afeiship/scrolled-event/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/scrolled-event
[size-url]: https://github.com/afeiship/scrolled-event/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/scrolled-event
[download-url]: https://www.npmjs.com/package/@jswork/scrolled-event
