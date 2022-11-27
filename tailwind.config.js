module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    fontSize: {
      0: '0',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#4a5568',
        brand: '#F57C00',
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
      dropShadow: {
        active: '0px 0px 2px rgba(24, 144, 255, 0.48)',
        error: '0px 0px 2px #F5222D',
      },
      boxShadow: {
        1: '0px 0px 10px 0px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  // plugins: [
  //   // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  //   require('@tailwindcss/forms'),
  // ],
};
