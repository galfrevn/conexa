import express, { Application } from 'express';

import { setupServer } from '@/lib/setup';
import { serverConfiguration } from '@/configuration/server';

export const initializeServer = () => {
  const application: Application = express();
  setupServer(application);

  if (process.env.NODE_ENV === 'test') return application;

  application.listen(serverConfiguration.port, () => {
    const { environment, port } = serverConfiguration;
    console.log(`[${environment}] 🚀 Server is running on port ${port}!`);
  });
};

initializeServer();
