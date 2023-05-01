/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xlg: '1280px',
      xl: '1440px',
      xxl: '1536px',
    },
    colors: {
      white: '#ffffff',
      darkPrimary: '#444444',
      navGradient: 'linear-gradient(180deg, rgba(0, 36, 107, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
      textShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
      wiTxt: '#1C3957',
      greyBlue1: '#7196BE',
      blue: '#0852E2',
      blue1: '#083D77',
      green4: '#0BD574',
      textGradient: 'linear-gradient(90.44deg, #0175EF 0.47%, #FB8FFD 87.39%, #FCE3A4 101.61%)',
      heroGradient: 'linear-gradient(180deg, #2781d5 0%, #ffd6f6 78.14%, #fff9c7 100%)',
      pinkShadow: 'rgba(247, 198, 227, 0.8)',
      accentLeaf: '#00DEB6',
      textDark: '#A1B7CE',
      darkBlueBg: '#001225',
      black4: '#717171',
      black8: '#222222',
      red: '#EB5757',
      primary: '#FFC20A',
      text: {
        main: '#222222',
        light: '#6B7280',
      },
      green: '#05A328',
      gray5: '#dddddd',
      pink: '#EB4C60',
      orange: '#FF9900'
    },
    extend: {},
  },
  plugins: [],
}
