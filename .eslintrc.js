/*
 * @Author: niaier-laptop niaier@outlook.com
 * @Date: 2022-01-25 15:18:52
 * @LastEditors: niaier-laptop niaier@outlook.com
 * @LastEditTime: 2022-05-27 15:18:23
 * @FilePath: \common-css\.eslintrc.js
 * @Description: 
 * 
 * Copyright (c) 2022 by niaier-laptop niaier@outlook.com, All Rights Reserved. 
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  }
}
