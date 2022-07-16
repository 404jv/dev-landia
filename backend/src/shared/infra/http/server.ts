import logger from '@modules/utils/logger';

import { app } from './app';

app.listen(3333, () =>
  logger.info('🚀 Server is running at http://localhost:3333')
);
