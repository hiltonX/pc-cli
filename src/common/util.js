/**
  * @Author 不悔
  * @Date 2021-09-17
  * @desrc 递归init树状图数据
  * @export
  * @param {String} url 要转换的url
 
  * 
*/
export const urlToObject = (url) => {
  if (url.indexOf('?')){
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