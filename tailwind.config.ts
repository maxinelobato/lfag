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
        brandWts: '#006400',
      },
    },
  },
  plugins: [],
}
export default config
