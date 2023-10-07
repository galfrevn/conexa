/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: ['@conexa/eslint'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};

module.exports = config;