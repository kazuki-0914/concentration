module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/standard',
    'prettier/unicorn',
    'prettier/vue'
  ],
  globals: { $nuxt: 'readonly', page: 'readonly' },
  rules: {
    complexity: ['error', 4],
    'max-depth': ['error', 1],
    'max-nested-callbacks': ['error', 2],
    'max-lines': ['error', 200],
    'no-console': +(process.env.NODE_ENV === 'production'),
    'prefer-template': 'error'
  },
  overrides: [
    {
      files: ['apis/**/*.ts', 'drafts/**/*.ts'],
      rules: { camelcase: ['off'] }
    }
  ]
}
