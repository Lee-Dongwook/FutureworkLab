const color = {
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
} as const;

const elevation = {
  blue: 'rgba(175, 198, 209, 0.2)',
  black: 'rgba(0, 0, 0, 0.06)',
  darkShadow: 'rgba(0, 0, 0, 0.1)',
} as const;

const typo = {
  h1: {
    fontSize: '2.5rem',
    lineHeight: '3.5rem',
  },
  h2: {
    fontSize: '2rem',
    lineHeight: '2.875rem',
  },
  h3: {
    fontSize: '1.75rem',
    lineHeight: '2.5rem',
  },
  h4: {
    fontSize: '1.375rem',
    lineHeight: '2rem',
  },
  h5: {
    fontSize: '1.25rem',
    lineHeight: '1.875rem',
  },
  title: {
    fontSize: '1.625rem',
    lineHeight: '2.375rem',
  },
  body1: {
    fontSize: '1rem',
    lineHeight: '1.75rem',
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
  },
  caption: {
    fontSize: '0.75rem',
    lineHeight: '1.25rem',
  },
  overline: {
    fontSize: '0.625rem',
    lineHeight: '1rem',
  },
} as const;

const breakPoint = {
  600: '(max-width: 600px)',
  1024: '(max-width: 1024px)',
  1440: '(max-width: 1440px)',
  1728: '(max-width: 1728px)',
  1920: '(max-width: 1920px)',
} as const;

export const theme = {
  color,
  elevation,
  typo,
  breakPoint,
} as const;
