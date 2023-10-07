import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const environmentVariables = createEnv({
  skipValidation: !!process.env['SKIP_ENV_VALIDATION'],
  experimental__runtimeEnv: process.env,
  server: {
    X_API_KEY: z.string().min(1),
    NODE_ENV: z.enum(['development', 'test', 'production']),
    DATABASE_URL: z.string().min(1),
  },
});