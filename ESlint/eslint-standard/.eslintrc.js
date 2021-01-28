/*
 * @Author: your name
 * @Date: 2020-11-19 10:34:48
 * @LastEditTime: 2021-01-08 17:22:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eslint-standard\.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double", { "allowTemplateLiterals": true, "avoidEscape": true}],
    "space-before-function-paren": ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
    "no-unused-vars":"off"
  },
};
