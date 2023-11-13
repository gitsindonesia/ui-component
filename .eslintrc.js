module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-essential', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 'off',
    "@typescript-eslint/consistent-type-imports": "error",
    "vue/no-reserved-component-names": "off",
    "vue/no-mutating-props": "off",
    "vue/valid-v-slot": "off",
    "vue/no-dupe-keys": "off"
  }
};
