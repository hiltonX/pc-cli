import { makeAutoObservable, runInAction } from 'mobx'
import { Toast } from 'antd-mobile'
import io from './io'
export default class mainStore {
  // 搜索列表的入参
  filterParams = undefined 
  // 列表
  list = []
  
  constructor() {
    makeAutoObservable(this)
  }
 /**
    * @Author 不悔
    * @Date 2021-09-17
    * @desrc 搜索列表的入参
    * @export
    * @param *
    * 
  */
  getList = async () => {

    Toast.loading('loading', 10000, () => {}, true)

    try {
      const res = await io.getList(this.filterParams)

      // const res = [{
      //   "perName": "客户姓名",
      //   "userPhone": "客户手机号码",
      //   "projectName": "居住项目",
      //   "address": "项目住址",
      //   "moveinDate": "入住时间",
      //   "steward": "管家",
      //   "compName": "所属公司",
      //   "carportNumber": "车位数量",
      //   "vehicleNumber": "车辆数量",
      //   "memberOfFamilyNumber": "家庭成员个数",
      //   "workNumber": "历史工单",
      //   "orderNumber": "历史订单",
      //   perId: 123
      // }]

      runInAction(() => {
        this.list = res
        Toast.hide()
      })
    } catch (e) {
      console.log(e, 'getList')
      Toast.hide()
    }
  }

}
