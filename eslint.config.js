import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import love from 'eslint-config-love'
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  stylistic.configs.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ...love,
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...love.rules,
      '@typescript-eslint/no-non-null-assertion': 'off',
      'import/no-absolute-path': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
    },
  },
  {
    plugins: {
      '@stylistic': stylistic,
    },
  },
)
