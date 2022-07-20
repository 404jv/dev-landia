import pino from 'pino';

// eslint-disable-next-line @typescript-eslint/no-empty-function
function ignore() {}

function getLogger() {
  if (process.env.NODE_ENV === 'test') {
    const consoleLogger = {
      trace: console.trace,
      debug: console.debug,
      info: ignore,
      warn: console.warn,
      error: console.error,
      fatal: console.error,
    };

    return consoleLogger;
  }

  if (['preview', 'production'].includes(process.env.NODE_ENV)) {
    const pinoLoggerProduction = pino({
      base: {
        environment: process.env.NODE_ENV,
      },
      nestedKey: 'payload',
    });

    return pinoLoggerProduction;
  }

  const pinoLoggerDevelopment = pino({
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
    nestedKey: 'payload',
  });

  return pinoLoggerDevelopment;
}

export default getLogger();
