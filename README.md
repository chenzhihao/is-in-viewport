# is-in-viewport 

> Check if an element is in viewport, overlap with viewport, or close to viewport.
Vanilla JavaScript. No dependency. Super tiny.

## Installation
```bash
$ npm install viewport-overlap-checker
```

## Usage

### Check if an element is totally in viewport
<img src="http://i.imgur.com/JMT7ACYg.png" width="600">

```js
import {isElementFullyInViewport} from 'viewport-overlap-checker';

const image = document.getElementById('img');

isElementFullyInViewport(image);
// true
```

### Check if an element is overlap with viewport
<img src="http://i.imgur.com/gETmAW3.png" width="600">

```js
import {isElementPartInViewport} from 'viewport-overlap-checker';

const image = document.getElementById('img');

isElementPartInViewport(image);
// true
```

### Check if an element is close to viewport
<img src="http://i.imgur.com/P3x2ul7.png" width="600">

```js
import {isElementCloseToViewport} from 'viewport-overlap-checker';

const image = document.getElementById('img');

isElementCloseToViewport(image, {top: 10});
// true

// this means the margin between top of element and bottom of viewport is no more than 10px;

// if we used it like isElementCloseToViewport(image, {top: 10, left: 20});
// this means the left of element is close to left of viewport in 20px AND top is close to bottom
// of viewport in 10px.

// Trikcy: the {top, bottom, left, right} values can be negative so you can restrict 
// the element is in center of viewport.

```

## License
[MIT](https://tldrlegal.com/license/mit-license)
