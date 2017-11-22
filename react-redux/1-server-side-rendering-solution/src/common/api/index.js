import axios from 'axios';
import { application, api } from '../config.js';

export default function eapi(url, token, obj, method, paramsData) {
  const AUTH_TOKEN =
    (token === 'null' || token === null || token === undefined) ? '' : token;
  const baseURL =
    (typeof location !== 'undefined') ?
    '/api' :
    `http://localhost:${application.port}/api`;

  const rooturl = typeof window !== 'undefined' && window.location
    ? window.location.pathname
    : global.__CLIENT_URL__;

  return axios({
    baseURL,
    url: (url || ''),
    method: (method || 'get'),
    data: obj,
    timeout: api.timeout,
    headers: {
      Authorization: AUTH_TOKEN,
      rooturl,
    },
    params: paramsData,

    transformResponse: [(resp) => {
      const r = (json) => {
        try {
          return JSON.parse(json);
        } catch (e) {
          return {};
        }
      };

      if (!r(resp).data) {
        return r(resp);
      }
      if (typeof window === 'undefined') {
        r(resp).data.requestedOrigin = ['s'];
      } else {
        r(resp).data.requestedOrigin = ['s', 'c'];
      }
      return r(resp);
    }],
  });
}

