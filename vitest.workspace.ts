import { defineConfig, defineWorkspace } from 'vitest/config';

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * Filters out the 'scripts' workspace and generates the workspace configuration object.
 * @constant {Object}
 */
const workspaceConfiguration = defineWorkspace([
  defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
      coverage: { all: true, include: ['src/**/*.{ts,tsx}'] },
      root: 'apps/site',
      name: ' Application',
      globals: true,
      environment: 'jsdom',
      env: {
        SKIP_ENV_VALIDATION: 'true',
      },
      setupFiles: ['__tests__/setup.ts'],
    },
  }),
  defineConfig({
    plugins: [tsconfigPaths()],
    test: {
      root: 'apps/services',
      name: ' Services ',
      testTimeout: 50000,
      maxConcurrency: 4,
    },
  }),
]);

export default workspaceConfiguration;
