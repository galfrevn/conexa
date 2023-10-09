import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

import { nextui } from '@nextui-org/react';

const configuration: Config = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        heading: ['var(--font-starwars)', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            focus: {
              DEFAULT: '#FFE81F',
            },
            primary: {
              DEFAULT: '#FFE81F',
            },
          },
          layout: {
            boxShadow: {
              medium: 'none',
            },
            radius: {
              medium: '0px',
            },
          },
        },
      },
    }),
  ],
};
export default configuration;
