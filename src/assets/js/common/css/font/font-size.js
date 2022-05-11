let innerHTMLFontSize = ''
const sizeNum = [...Array(100)].map((a, index) => index + 1)
let template = ''
sizeNum.forEach(item => {
  template = `
  .fz-${item} {
    font-size:${item}px!important;
  }
  `
  innerHTMLFontSize += template
})


export default innerHTMLFontSize
