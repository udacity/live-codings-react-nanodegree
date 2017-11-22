export const env = process.env.NODE_ENV;

export const newRelic = {
  appName: process.env.NEW_RELIC_APP_NAME || '',
};

export const api = {
  v2: {
    host: process.env.API,
  },
  cart: {
    host: process.env.API,
  },
  order: {
    host: process.env.API,
  },
  customer: {
    host: process.env.API,
  },
  auth: {
    host: process.env.API,
  },
};

