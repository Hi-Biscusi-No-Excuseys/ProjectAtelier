module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    // 'plugin:styled-components',
    // 'plugin:styled-components-a11y/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    // 'styled-components',
    // 'styled-components-a11y',
  ],
  rules: {
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
