
let innerHTMLSpace = ''
const space = [{ abbr: 'm', space: 'margin' }, { abbr: 'p', space: 'padding' }]
const direction = [{
  abbr: 'a',
  direction: { top: true, right: true, bottom: true, left: true }
}, {
  abbr: 'x',
  direction: { top: false, right: true, bottom: false, left: true }
}, {
  abbr: 'y',
  direction: { top: true, right: false, bottom: true, left: false }
}, {
  abbr: 't',
  direction: { top: true, right: false, bottom: false, left: false }
},
{
  abbr: 'b',
  direction: { top: false, right: false, bottom: true, left: false }
},
{
  abbr: 'l',
  direction: { top: false, right: false, bottom: false, left: true }
},
{
  abbr: 'r',
  direction: { top: false, right: true, bottom: false, left: false }
}
]
let template
let nTemplate

space.forEach((item) => {
  direction.forEach(itemD => {
    for (let index = 0; index <= 100; index++) {
      let top = itemD.direction.top ? `${item.space}-top:${index}px!important;` : ''
      let bottom = itemD.direction.bottom ? `${item.space}-bottom:${index}px!important;` : ''
      let left = itemD.direction.left ? `${item.space}-left:${index}px!important;` : ''
      let right = itemD.direction.right ? `${item.space}-right:${index}px!important;` : ''

      template = `
    .${item.abbr}${itemD.abbr}-${index}{
      ${top}
      ${bottom}
      ${left}
      ${right}
    }`
      // 负向偏移
      let nTop = itemD.direction.top ? `${item.space}-top:-${index}px!important;` : ''
      let nBottom = itemD.direction.bottom ? `${item.space}-bottom:-${index}px!important;` : ''
      let nLeft = itemD.direction.left ? `${item.space}-left:-${index}px!important;` : ''
      let nRight = itemD.direction.right ? `${item.space}-right:-${index}px!important;` : ''

      nTemplate = `
    .${item.abbr}${itemD.abbr}-n${index}{
      ${nTop}
      ${nBottom}
      ${nLeft}
      ${nRight}
    }`

      innerHTMLSpace += template + nTemplate

    }

  })
})


export default innerHTMLSpace
