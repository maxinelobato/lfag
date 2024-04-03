import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brandBlack: '#09090b',
        brandGreyBlue: '#32485F',
        brandGreyBlue900: '#102D53',
        brandOrange: '#F68713',
        brandOrange200: '#FAB975',
        brandWts: '#00E676',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
