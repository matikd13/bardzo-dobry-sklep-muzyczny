module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['build/**', 'src/generated/**', 'codegen.js', '.eslintrc.cjs'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:tailwindcss/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },

  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    eqeqeq: 1,
    'object-shorthand': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'no-nested-ternary': 'warn',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-boolean-value': 'error',
    'import/order': 'warn',
    curly: ['warn', 'multi-or-nest', 'consistent'],
    'no-use-before-define': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-misused-promises': 'off',
  },
};
