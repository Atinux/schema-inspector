module.exports = {
    'env': {
        'commonjs': true,
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 12
    },
    'rules': {
        'accessor-pairs': 'error',
        'array-bracket-newline': 'off',
        'array-bracket-spacing': 'off',
        'array-callback-return': 'error',
        'array-element-newline': 'off',
        'arrow-body-style': 'error',
        'arrow-parens': [
            'error',
            'as-needed'
        ],
        'arrow-spacing': [
            'error',
            {
                'after': true,
                'before': true
            }
        ],
        'block-scoped-var': 'off',
        'block-spacing': 'off',
        'brace-style': 'off',
        'camelcase': 'error',
        'capitalized-comments': 'off',
        'class-methods-use-this': 'error',
        'comma-dangle': 'off',
        'comma-spacing': 'off',
        'comma-style': [
            'error',
            'last'
        ],
        'complexity': 'error',
        'computed-property-spacing': [
            'error',
            'never'
        ],
        'consistent-return': 'off',
        'consistent-this': 'off',
        'curly': 'off',
        'default-case': 'error',
        'default-case-last': 'error',
        'default-param-last': 'error',
        'dot-location': [
            'error',
            'property'
        ],
        'dot-notation': [
            'error',
            {
                'allowKeywords': true
            }
        ],
        'eol-last': 'off',
        'eqeqeq': 'off',
        'func-call-spacing': 'error',
        'func-name-matching': 'error',
        'func-names': 'off',
        'func-style': 'off',
        'function-paren-newline': 'error',
        'generator-star-spacing': 'error',
        'grouped-accessor-pairs': 'error',
        'guard-for-in': 'error',
        'id-denylist': 'error',
        'id-length': 'off',
        'id-match': 'error',
        'implicit-arrow-linebreak': [
            'error',
            'beside'
        ],
        'indent': 'off',
        'init-declarations': 'off',
        'jsx-quotes': 'error',
        'key-spacing': 'off',
        'keyword-spacing': [
            'error',
            {
                'after': true,
                'before': true
            }
        ],
        'line-comment-position': 'off',
        'linebreak-style': [
            'error',
            'unix'
        ],
        'lines-around-comment': 'off',
        'lines-between-class-members': 'error',
        'max-classes-per-file': 'error',
        'max-depth': 'off',
        'max-len': 'off',
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': 'error',
        'max-params': 'off',
        'max-statements': 'off',
        'max-statements-per-line': 'off',
        'multiline-comment-style': 'off',
        'multiline-ternary': [
            'error',
            'never'
        ],
        'new-cap': 'error',
        'new-parens': 'error',
        'newline-per-chained-call': 'off',
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-await-in-loop': 'error',
        'no-bitwise': 'off',
        'no-caller': 'error',
        'no-confusing-arrow': 'error',
        'no-console': 'off',
        'no-constructor-return': 'error',
        'no-continue': 'off',
        'no-control-regex': 'off',
        'no-div-regex': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'off',
        'no-empty-function': 'off',
        'no-eq-null': 'off',
        'no-eval': 'error',
        'no-extend-native': 'off',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-extra-parens': 'off',
        'no-floating-decimal': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-inline-comments': 'off',
        'no-inner-declarations': [
            'error',
            'functions'
        ],
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'off',
        'no-loop-func': 'error',
        'no-loss-of-precision': 'error',
        'no-magic-numbers': 'off',
        'no-mixed-operators': 'off',
        'no-multi-assign': 'error',
        'no-multi-spaces': 'off',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': 'error',
        'no-negated-condition': 'off',
        'no-nested-ternary': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-wrappers': 'error',
        'no-nonoctal-decimal-escape': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-promise-executor-return': 'error',
        'no-proto': 'error',
        'no-restricted-exports': 'error',
        'no-restricted-globals': 'error',
        'no-restricted-imports': 'error',
        'no-restricted-properties': 'error',
        'no-restricted-syntax': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': 'off',
        'no-tabs': 'off',
        'no-template-curly-in-string': 'error',
        'no-ternary': 'off',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'off',
        'no-underscore-dangle': 'off',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-optional-chaining': 'error',
        'no-unused-expressions': 'off',
        'no-use-before-define': 'off',
        'no-useless-backreference': 'error',
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'off',
        'no-void': 'error',
        'no-warning-comments': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': [
            'error',
            'any'
        ],
        'object-curly-newline': 'off',
        'object-curly-spacing': 'off',
        'object-shorthand': 'off',
        'one-var': 'off',
        'one-var-declaration-per-line': [
            'error',
            'initializations'
        ],
        'operator-assignment': [
            'error',
            'always'
        ],
        'operator-linebreak': 'off',
        'padded-blocks': 'off',
        'padding-line-between-statements': 'error',
        'prefer-arrow-callback': 'off',
        'prefer-const': 'error',
        'prefer-destructuring': 'off',
        'prefer-exponentiation-operator': 'error',
        'prefer-named-capture-group': 'off',
        'prefer-numeric-literals': 'error',
        'prefer-object-spread': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': 'off',
        'prefer-rest-params': 'off',
        'prefer-spread': 'error',
        'prefer-template': 'off',
        'quote-props': 'off',
        'quotes': ['error', 'single'],
        'radix': [
            'error',
            'always'
        ],
        'require-atomic-updates': 'error',
        'require-await': 'error',
        'require-unicode-regexp': 'off',
        'rest-spread-spacing': 'error',
        'semi': 'off',
        'semi-spacing': [
            'error',
            {
                'after': true,
                'before': false
            }
        ],
        'semi-style': [
            'error',
            'last'
        ],
        'sort-imports': 'error',
        'sort-keys': 'off',
        'sort-vars': 'off',
        'space-before-blocks': 'off',
        'space-before-function-paren': 'off',
        'space-in-parens': [
            'error',
            'never'
        ],
        'space-infix-ops': 'off',
        'space-unary-ops': 'error',
        'spaced-comment': [
            'error',
            'always'
        ],
        'strict': [
            'error',
            'never'
        ],
        'switch-colon-spacing': 'error',
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
        'template-tag-spacing': 'error',
        'unicode-bom': [
            'error',
            'never'
        ],
        'vars-on-top': 'off',
        'wrap-regex': 'off',
        'yield-star-spacing': 'error',
        'yoda': [
            'error',
            'never'
        ]
    }
};
