import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const environmentVariables = createEnv({
  skipValidation: !!process.env['SKIP_ENV_VALIDATION'],
  experimental__runtimeEnv: process.env,
  server: {
    /* API_URL: z.string().min(1).url(), */
    APP_URL: z.string().min(1),
    API_URL: z.string().min(1),
    API_KEY: z.string().min(1),
  },
});
