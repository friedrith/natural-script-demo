module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  rules: {
    'react/jsx-one-expression-per-line': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        ignorePackages: true,
        pattern: {
          jsx: 'never',
          scss: 'never',
        },
      },
    ],
    /*semi: [2, 'never'],
    'arrow-body-style': 0,
    'no-const-assign': 'error',
    eqeqeq: 'error',
    curly: 'error',
    strict: 'error',
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 'error',
    'eslint-config-hapi': 0,
    'no-const-assign': 'error',
    'no-unused-vars': [2, { vars: 'all', args: 'none' }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'always'],
    'keyword-spacing': 'error',
    'comma-spacing': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single'],
    'space-infix-ops': 'error', */
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [
          ['~assets', './src/assets'],
          ['~atoms', './src/atoms'],
          ['~molecules', './src/molecules'],
          ['~organisms', './src/organisms'],
          ['~pages', './src/pages'],
          ['~state', './src/state'],
          ['~styles', './src/styles'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.scss'],
      },
    },
  },
}
