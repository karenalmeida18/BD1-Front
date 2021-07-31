module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'max-len': ['off', {
      code: 100,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
    }],
    'no-console': 'warn',

    'no-param-reassign': ['error', {
      ignorePropertyModificationsFor: ['state'],
    }],
    'no-unused-vars': ['error', {
      args: 'none',
    }],
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'react/button-has-type': 'off',
  },
};
