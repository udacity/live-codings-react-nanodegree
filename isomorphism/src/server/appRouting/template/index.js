import fs from 'fs';
import { env } from '../../config.js';

const production = (env === 'production');
const development = (env === 'development');

function javascripts(assets = {}) {
  const js = assets.javascript || {};
  const mainJS = js.main || '';
  const path =
    (mainJS.length) ? `${mainJS.replace('./dist', '/dist')}` : '/dist/main.js';

  return `<script src="${path}" async></script>`;
}

const stylesheets = '';

function renderHTML(html, preloadedState, assets, head = {}) {
  return `
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta name="google-site-verification" content="pzt0EPO2tyHLuk8xVtwYI-SGmKKo3w57PNU6OoyP6GY" />
    <meta name="google-site-verification" content="e-DrbE3gv4C-V7kCy2MW_H-Pc-SmwSOyaz1ot9EUU4g" />
    ${(head.title) ? head.title.toString() : ''}
    <script>
      window.dataLayer = [];
    </script>
    ${(head.meta) ? head.meta.toString().replace(/\/>/g, '/>\n    ') : ''}
    ${(head.script) ? head.script.toString() : ''}
    ${(head.link) ? head.link.toString() : ''}
    <!--link href="/${stylesheets}" rel="stylesheet"-->
  </head>
  <body>
    <div id="app">${html}</div>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
    </script>
    ${javascripts(assets)}
  </body>
</html>
    `;
}

export default renderHTML;

