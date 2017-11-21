module.exports = {
  hostName: process.env.HOST_NAME,
  api: {
    timeout: 30000,
  },
  application: {
    port: process.env.APPLICATION_PORT,
  },
  pathGroper: process.env.REDIRECTS_BASE_URL,
};

