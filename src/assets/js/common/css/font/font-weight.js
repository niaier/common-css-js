let innerHTMLFontWeight = ''
const sizeNum = [100, 200, 300, 400, 500, 600, 700, 800]
let template = ''
sizeNum.forEach(item => {
  template = `
  .fw-${item} {
    font-weight:${item}!important;
  }`
  innerHTMLFontWeight += template
})


export default innerHTMLFontWeight
