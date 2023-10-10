import express from 'express';

import { setupServer } from '@/lib/setup';
import { serverConfiguration } from '@/configuration/server';

const services = async () => {
  const application = express();
  setupServer(application);

  application.listen(serverConfiguration.port, () => {
    const { environment, port } = serverConfiguration;
    console.log(`[${environment}] 🚀 Server is running on port ${port}!`);
  });
};

services();
