module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': 'standard',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  "plugins": [
    "html"
  ],
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
  }
}
