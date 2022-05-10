let innerHTMLPosition = ''
let innerHTMLoffset = ''
const position = ['absolute', 'fixed', 'relative', 'static', 'inherit'
]

const offset = ['top', 'bottom', 'left', 'right'
]
let positionTemplate = ''
position.forEach(item => {
  positionTemplate = `
  .position-${item} {
    position:${item}!important;
  }
  `
  innerHTMLPosition += positionTemplate
})


let offsetTemplate = ''
let offsetTemplateN = ''
offset.forEach(item => {
  for (let index = 0; index <= 50; index++) {
    offsetTemplate = `
    .${item}-${index} {
      ${item}:${index}px!important;
    }
    `
    offsetTemplateN = `
    .${item}-n${index} {
      ${item}:-${index}px!important;
    }
    `
    innerHTMLoffset += offsetTemplate + offsetTemplateN
  }
})



export default innerHTMLPosition + innerHTMLoffset
