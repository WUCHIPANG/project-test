/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],

  overrides: [{
    files: ['*.html'],
    rules: {
      'vue/comment-directive': 'off',
    },
  }],

  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
    requireConfigFile: false,
    parser: '@babel/eslint-parser',
  },

  plugins: ['vue'],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },

  rules: {
    'no-console': process.env.VITE_NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.VITE_NODE_ENV === 'production' ? 'error' : 'off',
    camelcase: 'error',
    curly: ['error', 'multi-line'],
    'dot-notation': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'new-cap': ['warn', {
      newIsCap: true,
      capIsNew: false,
      properties: true,
    }],

    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-unmodified-loop-condition': 'error',

    'no-unneeded-ternary': ['error', {
      defaultAssignment: false,
    }],

    'no-unused-vars': ['warn', {
      ignoreRestSiblings: true,
      destructuredArrayIgnorePattern: '[A-Z]',
    }],

    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'one-var': ['error', {
      initialized: 'never',
    }],

    'quote-props': ['error', 'as-needed'],
    'spaced-comment': ['error', 'always', {
      block: {
        balanced: true,
      },
    }],

    yoda: 'error',

    // Layout & Formatting

    'array-bracket-spacing': 'error',
    'arrow-spacing': 'error',
    'brace-style': 'error',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline',
    }],

    'comma-spacing': 'error',
    'comma-style': 'error',
    'dot-location': ['error', 'property'],
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'generator-star-spacing': ['error', 'both'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'new-parens': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-tabs': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always', {
      objectsInObjects: false,
    }],

    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],

    'operator-linebreak': 'error',
    'padded-blocks': ['error', 'never'],
    quotes: ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],

    'rest-spread-spacing': 'error',
    semi: ['error', 'never'],
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'switch-colon-spacing': 'error',
    'template-curly-spacing': 'error',
    'wrap-iife': ['error', 'any'],
    'yield-star-spacing': ['error', 'both'],
    // Vue

    'vue/component-name-in-template-casing': 'error',
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'beside',
      multiline: 'below',
    }],

    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
      },
    }],

    'vue/multi-word-component-names': ['error', {
      ignores: ['index'],
    }],
    'vue/singleline-html-element-content-newline': 'off',
  },
}
