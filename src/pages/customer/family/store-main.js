import { makeAutoObservable, runInAction } from 'mobx'
import { Toast } from 'antd-mobile'
import io from './io'

export default class mainStore {

  // 客户id
  perId = undefined 
  // 家庭成员信息
  familyList = []

  
  constructor() {
    makeAutoObservable(this)
  }
 /**
    * @Author 不悔
    * @Date 2021-06-02
    * @desrc 获取审计日志列表
    * @export
    * @param {Number} current 当前页码
    * 
  */
/**
    * @Author 不悔
    * @Date 2021-09-22
    * @desrc 获取车辆信息列表
    * @export
    * @param {*}
    * 
  */
  getFamilyList = async () => {
    Toast.loading('loading', 10000, () => {}, true)

    try {
      // const res = await io.getFamilyList({
      //   perId: this.perId
      // })
      const res = [{
        name: '张三',
        appellation: '母亲',
        sex: '性别',
        birthday: 'birthday',
        company: '工作单位'
      }, {
        vehicleumber: '车牌号',
        vehicleBrand: '品牌',
        vehicleSeries: '系列',
      },{
        vehicleumber: '车牌号',
        vehicleBrand: '品牌',
        vehicleSeries: '系列',
      }]

      runInAction(() => {
        Toast.hide()
        this.familyList = res
      })
    } catch (e) {
      console.log(e, 'getCarList')
      Toast.hide()
    }
  }

}
