import winston from 'winston';

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      formatter: options => options.message,
    }),
  ],
});

export default logger;
