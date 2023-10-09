import { Application as ExpressApplication } from 'express';

import helmet from 'helmet';
import cors from 'cors';

import { serverRouter } from '@/router';

export const setupServer = (application: ExpressApplication) => {
  application.use(cors());
  application.use(helmet());

  application.use('/', serverRouter);
};
