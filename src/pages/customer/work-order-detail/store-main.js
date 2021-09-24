import { makeAutoObservable, runInAction } from 'mobx'
import { Toast } from 'antd-mobile'
import io from './io'


export default class mainStore {

  // 订单id
  orderId = undefined 
  // 订单详情
  workOrderDetail = {}
  
  constructor() {
    makeAutoObservable(this)
  }
 /**
    * @Author 不悔
    * @Date 2021-09-24
    * @desrc 订单详情
    * @export
    * @param {*}
    * 
  */
  getWorkOrderDetail = async () => {

    Toast.loading('loading', 10000, () => {}, true)

    try {
      const res = await io.getWorkOrderDetail({
        orderId: this.orderId,
      })
      // const res = {
      //   orderId: '订单编号',
      //   subName: '所属服务',
      //   desc: '工单来源',
      //   commitDate: '下单时间',
      //   datetime: '预约时间',
      //   expStatus: '订单状态',
      //   orderDescribe: '订单描述',
      //   coupleBack: '处理反馈',
      //   photo: '图片',
      // }

      runInAction(() => {
        this.workOrderDetail = res || {}

        Toast.hide()
      })
    } catch (e) {
      console.log(e, 'getWorkOrderDetail')
      Toast.hide()
    }
  }


}
