/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'brightBlue': {
        100: '#007BFF',
        300: '#036de0',
      },
      'lightWhite': {
        100: '#F0F4F8',
        300: '#ffffff',
      },
      'bgDark': '#0F172A',
      'bdDarkGray': '#1E293B',
      'bdDarkLight': '#293548',
    },
    fontFamily: { // Custom fonts
      sans1: ['Montserrat', 'sans-serif'],
      sans2: ['Quicksand', 'sans-serif'],
    },
    extend: {
      backgroundColor: {
        customBody: '#0F172A',
      },
      fontSize: { // Custom font sizes
        small: '14px',
        normal: '16px',
        medium: '18px',
        large: '32px',
        extralarge: '64px',
      },
      spacing: { // Custom spacing
        '4': '0.25rem',
        '8': '0.5rem',
        '12': '0.8rem',
        '24': '1.5rem',
        '32': '2rem',
        '100': '6.25rem',
        '120': '7.5rem',
      },
      letterSpacing: { // Custom letter spacing
        normal: '0.4px',
        medium: '0.2em', 
      },
      lineHeight: { // Custom line height | For example, if the font size is 16px and the line height is 1.5, the calculated line height is 16px × 1.5 = 24px.
        small: '24px',
        normal: '48px',
        large: '96px',
      },
      borderRadius: {
        small: '8px',
        normal: '12px',
        large: '32px',
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
    },
  },
  plugins: [],
}