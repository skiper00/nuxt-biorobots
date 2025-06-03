import withNuxt from './.nuxt/eslint.config.mjs'
import prettier from 'eslint-config-prettier'
import vue from 'eslint-plugin-vue'

export default withNuxt(
  prettier,
  ...vue.configs['flat/recommended'],
  {
    rules: {
      'vue/html-indent': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/first-attribute-linebreak': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-self-closing': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-parsing-error': 'error',
      'vue/no-duplicate-attributes': 'error',
      'vue/valid-attribute-name': 'error',
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }],
      'prettier/prettier': 'off'
    },
  }
)
