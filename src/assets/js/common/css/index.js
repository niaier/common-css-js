import innerHTMLFloat from './float/float';
import innerHTMLspace from './space/space';
import innerHTMLPosition from './position/position';
import innerHTMLFontSize from './font/font-size';
import innerHTMLFontWeight from './font/font-weight';




const initCommonCss = function () {
  const commonCss = document.createElement('style')
  const total = innerHTMLFloat + innerHTMLspace + innerHTMLPosition + innerHTMLFontSize + innerHTMLFontWeight
  console.log(total);
  commonCss.innerHTML = total
  commonCss.id = 'commonCss'
  const body = document.querySelector('head')
  body.appendChild(commonCss)
}
initCommonCss()
export default initCommonCss
