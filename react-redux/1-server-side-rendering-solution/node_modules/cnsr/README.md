# cnsr

cnsr (pronunciation: _censor_) is a lightweight object masker for sensitive data written in functional approach with no side effects, no dependencies focused in NodeJS server logs data and fully configurable.

```javascript
// mount or get your mounted object for your request or response
const reqData = { user: 'Vincent Vega', password: 'lovemia' };

// use a log tool that you like and if you want to print
// what is happening, just execute csnr with its arguments
yourLoggerTool.info(`${method} in ${uri} endpoint`, cnsr(reqData, ['password']));

// do the rest of your duties
...
```

## Installation

```bash
$ npm install --save cnsr
```

## Docs and usage

Require or import it to your file

```javascript
const cnsr = require('cnsr');
```

`cnsr` needs two arguments, the first is your object and the second is an Array of string keys to be masked:

### `cnsr(object, maskable)`

*object*: Your object to be iterated and masked based in *maskable* argument;

*maskable*: Array of strings you want to mask, example: `['password', 'auth_token']`.

Example:

```javascript
cnsr({ user: 'butch_coolidge', password: 'punch123' }, ['password']); // { user: 'butch_coolidge', password: '********' }
```

