/**
  * @Author 不悔
  * @Date 2021-09-17
  * @desrc 递归init树状图数据
  * @export
  * @param {String} url 要转换的url
 
  * 
*/
export const urlToObject = (url) => {
  if (url.indexOf('?') === 0){
    
    let str = url.slice(1)
    let strArr = str.indexOf('&') ? str.split('&') : [str]
    const params = {}
    strArr.forEach(item => {
      const temp = item.indexOf('=') ? item.split('=') : [item]
      params[temp[0]] = temp[1]
    })
    return params
  }
}


/**
  * @Author 不悔
  * @Date 2021-09-23
  * @desrc 水印
  * @export
  * @param {*}
  * 
*/
export const watermark = ({
  id = 'water-mark',
  textList = ['张三李四'],
  container = document.body, 
  width = window.innerWidth / 3,
  // height = document.body.clientHeight / 3.3,
  fillStyle = 'rgb(242, 242, 242)',
  zIndex = 100,
  font = '12px normal Rubik'
} = {}) => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    // canvas.height = height

    const ctx = canvas.getContext('2d')
    ctx.fillStyle = fillStyle
    ctx.font = font

    ctx.rotate(Math.PI/180 * 30)
    
    textList.map(item => {
      return ctx.fillText(item, (width - ctx.measureText(item).width) / 2 , 0)
    })

    const base64Url = canvas.toDataURL()
    const watermarkDiv = document.createElement('div') 

    watermarkDiv.id = id
    watermarkDiv.setAttribute('style', `position:absolute;top:0;left: 0;width:100%; height: 100%;z-index:${zIndex};background-repeat:repeat;pointer-events:none;background-image:url('${base64Url}')`)        
    container.style.position = 'relative'
    container.insertBefore(watermarkDiv, container.firstChild)
}

