import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

const sourceFiles = ['src/**/*.ts']

const tsConfigs = tseslint.configs.recommended.map((config) => ({
  ...config,
  files: sourceFiles
}))

export default [
  {
    files: sourceFiles,
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    }
  },
  {
    files: sourceFiles,
    ...js.configs.recommended
  },
  ...tsConfigs,
  {
    files: sourceFiles,
    ...prettierConfig
  }
]
