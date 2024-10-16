/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        background: '#F5F9FB',
        primary: '#003366',
        secondary: '#87CEEB',
        accent: '#FF4500',
        lightBeige: '#FAF3E0',
        textPrimary: '#333333',
        textSecondary: '#666666',
        link: '#1E90FF',
      },
      boxShadow: {
        blue: '0 4px 6px -1px rgba(175, 198, 209, 0.2)',
        black: '0 4px 6px -1px rgba(0, 0, 0, 0.06)',
        darkShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      fontSize: {
        h1: ['2.5rem', '3.5rem'],
        h2: ['2rem', '2.875rem'],
        h3: ['1.75rem', '2.5rem'],
        h4: ['1.375rem', '2rem'],
        h5: ['1.25rem', '1.875rem'],
        title: ['1.625rem', '2.375rem'],
        body1: ['1rem', '1.75rem'],
        body2: ['0.875rem', '1.5rem'],
        caption: ['0.75rem', '1.25rem'],
        overline: ['0.625rem', '1rem'],
      },
      screens: {
        '600': '600px',
        '1024': '1024px',
        '1440': '1440px',
        '1728': '1728px',
        '1920': '1920px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
