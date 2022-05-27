/*
 * @Author: niaier-laptop niaier@outlook.com
 * @Date: 2022-05-27 14:45:24
 * @LastEditors: niaier-laptop niaier@outlook.com
 * @LastEditTime: 2022-05-27 14:57:46
 * @FilePath: \common-css\vue.config.js
 * @Description: 
 * 
 * Copyright (c) 2022 by niaier-laptop niaier@outlook.com, All Rights Reserved. 
 */
module.exports = {
  chainWebpack (config) {
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.compress.drop_console = true
      return args
    })
  }
}