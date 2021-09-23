import { makeAutoObservable, runInAction } from 'mobx'
import { Toast } from 'antd-mobile'
import io from './io'

export default class mainStore {

   // 客户id
   perId = undefined 
   // 车辆信息
   carList = []

  
  constructor() {
    makeAutoObservable(this)
  }
  /**
    * @Author 不悔
    * @Date 2021-09-22
    * @desrc 获取车辆信息列表
    * @export
    * @param {*}
    * 
  */
  getCarList = async () => {
    Toast.loading('loading', 10000, () => {}, true)

    try {
      const res = await io.getCarList({
        perId: this.perId
      })
      // const res = [{
      //   vehicleumber: '车牌号',
      //   vehicleBrand: '品牌',
      //   vehicleSeries: '系列',
      // }, {
      //   vehicleumber: '车牌号',
      //   vehicleBrand: '品牌',
      //   vehicleSeries: '系列',
      // },{
      //   vehicleumber: '车牌号',
      //   vehicleBrand: '品牌',
      //   vehicleSeries: '系列',
      // }]

      runInAction(() => {
        Toast.hide()
        this.carList = res || []
      })
    } catch (e) {
      console.log(e, 'getCarList')
      Toast.hide()
    }
  }

}
