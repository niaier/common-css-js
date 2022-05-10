let innerHTMLFloat = ''
const position = ['left', 'right', 'inherit', 'none', 'inline-start', 'inline-end'
]
let template = ''
position.forEach(item => {
  template = `
  .float-${item} {
    float:${item}!important;
  }
  `
  innerHTMLFloat += template
})


export default innerHTMLFloat
