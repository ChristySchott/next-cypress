import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('@rocketseat/eslint-config/next'),
  ...compat.config({
    rules: {
      '@typescript-eslint/no-namespace': 'off',
    },
  }),
]

export default eslintConfig
