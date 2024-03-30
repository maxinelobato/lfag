import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brandBlack: '#09090b',
        brandGreyBlue: '#32485F',
        brandOrange: '#F68713',
        brandOrange200: '#FAB975',
        brandWts: '#00E676',
      },
    },
  },
  plugins: [],
}
export default config
