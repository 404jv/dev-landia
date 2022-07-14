import pino from 'pino';

const logger = pino({
  enabled: process.env.NODE_ENV !== 'test',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

export default logger;
