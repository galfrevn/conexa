import { defineWorkspace } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * Filters out the 'scripts' workspace and generates the workspace configuration object.
 * @constant {Object}
 */
const workspaceConfiguration = defineWorkspace([
  {
    plugins: [tsconfigPaths()],
    test: {
      root: 'apps/site',
      name: ' Application',
    },
  },
  {
    plugins: [tsconfigPaths()],
    test: {
      root: 'apps/services',
      name: ' Services ',
      testTimeout: 10000,
      maxConcurrency: 5
    },
  },
]);

export default workspaceConfiguration;
