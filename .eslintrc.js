module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest'
  ],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
  ],
  env: {
    'jest/globals': true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ]
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'interface',
        'format': [
          'PascalCase'
        ],
        'prefix': [
          'I'
        ],
        'filter': {
          'regex': 'VM$',
          'match': false
        }
      },
      {
        'selector': 'typeAlias',
        'format': [
          'PascalCase'
        ],
        'prefix': [
          'T'
        ]
      },
      {
        'selector': 'variable',
        'format': [
          'camelCase',
          'PascalCase',
          'UPPER_CASE'
        ]
      },
      {
        'selector': 'variable',
        'modifiers': ['const', 'exported', 'unused'],
        'types': ['boolean'],
        'format': ['PascalCase'],
        'prefix': ['is', 'should', 'has', 'can', 'did', 'will']
      }
    ],
    'padding-line-between-statements': [
      'error',
      {
        'blankLine': 'always',
        'prev': [
          'multiline-const',
          'multiline-let'
        ],
        'next': '*'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': [
          'multiline-const',
          'multiline-let'
        ]
      },
      {
        'blankLine': 'never',
        'prev': [
          'singleline-let',
          'singleline-const'
        ],
        'next': [
          'singleline-let',
          'singleline-const'
        ]
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'function'
      }
    ],
    'newline-before-return': 'error',
    'react/jsx-filename-extension': [
      'error',
      {
        'extensions': [
          '.tsx'
        ]
      }
    ],
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', 'always'],
    'react/function-component-definition': 'off',
    '@typescript-eslint/semi': [
      'error',
      'always'
    ],
    'curly': [
      'error',
      'multi-line'
    ],
    'import/prefer-default-export': 'off',
    'no-console': 'error',
    'react/react-in-jsx-scope': 'off',
    'object-curly-newline': [
      'error',
      {
        'consistent': true
      }
    ],
    'react/destructuring-assignment': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-indent': ['error', 2, { 'indentLogicalExpressions': true }],
    'no-await-in-loop': 'off',
    'react/no-multi-comp': 'error',
    'no-restricted-syntax': 'off',
    'import/no-cycle': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-children-prop': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', { 'allowShortCircuit': true }],
    'no-nested-ternary': 'error',
    'max-len': [
      'error',
      {
        'code': 100
      }
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 'error',
    'react/no-array-index-key': 'error',
    'prefer-spread': 'off',
    'import/no-extraneous-dependencies': 'error',
    '@typescript-eslint/no-shadow': 'error',
    'jsx-a11y/media-has-caption': 'off',
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'jsx-quotes': [
      'error',
      'prefer-single'
    ],
    'no-param-reassign': 'error',
    'no-underscore-dangle': 'off',
    'jsx-a11y/no-static-element-interactions': 'error',
    'react/jsx-no-bind': 'off',
    'react/default-props-match-prop-types': 'off',
    'no-prototype-builtins': 'off',
    'prefer-destructuring': 'off',
    'react/prop-types': 'off',
    'import/no-mutable-exports': 'error',
    'no-restricted-exports': ['error', { 'restrictedNamedExports': ['off'] }],
    'arrow-body-style': ['error', 'as-needed'],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'off',
    'no-alert': 'off',
    'max-classes-per-file': [
      'error',
      1
    ],
    '@typescript-eslint/no-useless-constructor': 'off',
    'class-methods-use-this': 'error',
    'no-plusplus': [
      'error',
      {
        'allowForLoopAfterthoughts': true
      }
    ],
    'no-multi-assign': 'error',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    'eol-last': ['error', 'always'],
    'react/no-danger' : 'off',
  }
};
