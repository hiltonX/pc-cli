import { makeAutoObservable, runInAction } from 'mobx'
import { Toast } from 'antd-mobile'
import io from './io'
export default class mainStore {

  // 客户id
  perId = undefined 
  // 客户详情
  perDetail = {}
  
  constructor() {
    makeAutoObservable(this)
  }
 /**
    * @Author 不悔
    * @Date 2021-09-17
    * @desrc 获取客户详情
    * @export
    * @param {*} 
    * 
  */
  getDetail = async () => {
    
    Toast.loading('loading', 10000, () => {}, true)

    try {
      // const res = await io.getLogList({
      //   perId: this.perId
      // })

      const res = {
        "perName": "客户姓名",
        "userPhone": "客户手机号码",
        "projectName": "居住项目",
        "address": "项目住址",
        "moveinDate": "入住时间",
        "steward": "管家",
        "compName": "所属公司",
        "carportNumber": "车位数量",
        "vehicleNumber": "车辆数量",
        "memberOfFamilyNumber": "家庭成员个数",
        "workNumber": "历史工单",
        "orderNumber": "历史订单",
        perId: 123
      }

      runInAction(() => {
        this.perDetail = res
        Toast.hide()
      })
    } catch (e) {
      console.log(e, 'getDetail')
      Toast.hide()
    }
  }

}
