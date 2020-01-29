module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'import/resolver': {
      webpack: './webpack/webpack.config.eslint.js',
    },
  },
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/camelcase': ['error', {
      properties: 'never',
      ignoreDestructuring: true
    }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error', {
      vars: 'all',
      args: 'none',
      ignoreRestSiblings: false
    }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'arrow-body-style': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'no-await-in-loop': 'off',
    'no-console': 'off',
    'no-continue': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': ['error', {
      'allowAfterThis': true,
      'allowAfterSuper': true
    }],
    'no-unused-vars': 'off',
    'react/prefer-stateless-function': [2, {
      'ignorePureComponents': true
    }],
    'react/no-deprecated': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': ['.ts', '.tsx', '.js', '.jsx']
      }
    ],
    'spaced-comment': ['error', 'always', {
      'exceptions': ['-', '=', '+', '*']
    }]
  }
}
