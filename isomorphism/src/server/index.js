import path from 'path';
import WebpackIsomorphicTools from 'webpack-isomorphic-tools';
import dotenv from 'dotenv';
import WebpackIsomorphicToolsConfig from './../../webpack/webpack-isomorphic-tools';
import * as server from './server';

dotenv.config();

/* GLOBALS */
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;  // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
global.__DEVELOPMENT__ = process.env.NODE_ENV === 'development';

const rootDir = path.resolve(__dirname, '../../');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(WebpackIsomorphicToolsConfig)
  .server(rootDir, () => server);

