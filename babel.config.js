/*
 * @Author: niaier-laptop niaier@outlook.com
 * @Date: 2022-01-25 15:18:52
 * @LastEditors: niaier-laptop niaier@outlook.com
 * @LastEditTime: 2022-05-27 15:12:46
 * @FilePath: \common-css\babel.config.js
 * @Description: 
 * 
 * Copyright (c) 2022 by niaier-laptop niaier@outlook.com, All Rights Reserved. 
 */

const prodPlugins = []
// 如果处于发布模式，才添加这个插件
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    // 在生产环境中 bulid  去除报错：
    // Unexpected console statement (no-console) 去除 console 中的插件
    ...prodPlugins
  ]
}

