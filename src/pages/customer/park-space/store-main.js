import { makeAutoObservable, runInAction } from 'mobx'
import { Toast } from 'antd-mobile'
import io from './io'

export default class mainStore {

  // 客户id
  perId = undefined 
  // 车位信息
  parkSpaceList = []
  
  constructor() {
    makeAutoObservable(this)
  }
 /**
    * @Author 不悔
    * @Date 2021-09-22
    * @desrc 获取审计日志列表
    * @export
    * @param {*}
    * 
  */
  getParkSpaceList = async () => {
    Toast.loading('loading', 10000, () => {}, true)

    try {
      // const res = await io.getParkSpaceList({
      //   perId: this.perId
      // })
      const res = [{
        carportNumber: '车位号'
      }, {
        carportNumber: '车位号'
      },{
        carportNumber: '车位号'
      }]

      runInAction(() => {
        Toast.hide()
        this.parkSpaceList = res
      })
    } catch (e) {
      console.log(e, 'getParkSpaceList')
      Toast.hide()
    }
  }

}
