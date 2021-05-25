module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', 'ts', 'tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  }
};
