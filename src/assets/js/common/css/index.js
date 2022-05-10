import innerHTMLFloat from './float/float';
import innerHTMLspace from './space/space';
import innerHTMLPosition from './position/position';
const commonCss = document.createElement('style')
const total = innerHTMLFloat + innerHTMLspace + innerHTMLPosition
export default total
commonCss.innerHTML = total
commonCss.id = 'commonCss'
const body = document.querySelector('head')
body.appendChild(commonCss)