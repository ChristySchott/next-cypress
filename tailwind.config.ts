import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      gridTemplateRows: {
        app: 'min-content max-content',
      },
    },
  },
  plugins: [],
} satisfies Config
