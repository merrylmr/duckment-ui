module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2020
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    " @typescript-eslint/camelcase": "off",
    "camelcase": [
      1,
      {
        "properties": "never"
      }
    ]
  }
}