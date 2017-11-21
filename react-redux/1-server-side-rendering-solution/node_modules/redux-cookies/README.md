# redux-cookies
Redux cookies-middleware and cookies-actions for Isomorphic(Universal) cookies

#Server-side
```javascript
import {createStore, applyMiddleware} from 'redux';
import Cookies from 'cookies';
import {getCookiesMiddleware} from 'redux-cookies';
import {createServer} from 'http';
import reducer from './reducer';

createServer(function(req, res) {
    const cookies = new Cookies(req, res);
    const store = createStore(
      reducer,
      applyMiddleware(getCookiesMiddleware(cookies))
    );
    //...
}).listen(3000);
```

#Client-side
```javascript
import Cookies from 'cookies-js';
import {getCookiesMiddleware} from 'redux-cookies';
import reducer from './reducer';
const store = createStore(
  reducer,
  applyMiddleware(getCookiesMiddleware(Cookies))
);
```

#Actions
```javascript
import {cookiesGet} from 'redux-cookies';

export function alertSomething() {
    return dispatch => {
        const something = dispatch(cookiesGet('something'));
        window.alert(something);
    };
}
```
