// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  globals: {
    'Vue': true
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'object-shorthand': 0,
    'arrow-parens': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'indent': 0,
    'prefer-arrow-callback': 0,
    'no-tabs': 0,
    'no-new': 0,
    'no-unused-vars': 1,
    'no-return-assign': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
