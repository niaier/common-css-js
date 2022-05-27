/*
 * @Author: niaier-laptop niaier@outlook.com
 * @Date: 2022-01-26 11:10:13
 * @LastEditors: niaier-laptop niaier@outlook.com
 * @LastEditTime: 2022-05-27 15:01:49
 * @FilePath: \common-css\src\assets\js\common\css\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by niaier-laptop niaier@outlook.com, All Rights Reserved. 
 */
import innerHTMLFloat from './float/float';
import innerHTMLspace from './space/space';
import innerHTMLPosition from './position/position';
import innerHTMLFontSize from './font/font-size';
import innerHTMLFontWeight from './font/font-weight';




const initCommonCss = function () {
  const commonCss = document.createElement('style')
  const total = innerHTMLFloat + innerHTMLspace + innerHTMLPosition + innerHTMLFontSize + innerHTMLFontWeight
  commonCss.innerHTML = total
  commonCss.id = 'commonCss'
  const body = document.querySelector('head')
  body.appendChild(commonCss)
  console.log(total)
}
initCommonCss()
export default initCommonCss
