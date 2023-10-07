import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const environmentVariables = createEnv({
  skipValidation: !!process.env['SKIP_ENV_VALIDATION'],
  experimental__runtimeEnv: process.env,
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
    API_URL: z.string().min(1).url(),
    DATABASE_URL: z.string().min(1),
  },
});
