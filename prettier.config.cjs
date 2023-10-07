/** @typedef {import('prettier').Config} PrettierConfig */

/** @type {PrettierConfig | SortImportsConfig} */
const config = {
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  plugins: [
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
};

module.exports = config;
