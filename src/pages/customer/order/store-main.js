import { makeAutoObservable, runInAction } from 'mobx'
import { Toast } from 'antd-mobile'
import io from './io'

export default class mainStore {

    // 客户id
    perId = undefined 
    // 订单状态
    orderList = '全部'
    // 工单信息
    workOrderList = []
  
    
    constructor() {
      makeAutoObservable(this)
    }
  
    /**
      * @Author 不悔
      * @Date 2021-09-24
      * @desrc 获取订单信息
      * @export
      * @param {*}
      * 
    */
    getOrderList = async () => {
      Toast.loading('loading', 10000, () => {}, true)
  
      try {
        const res = await io.getOrderList({
          perId: this.perId,
          expStatus: this.expStatus
        })
        // const res = [{
        //   subName: '所属服务',
        //   commitDate: '下单时间',
        //   subState: '服务状态',
        //   orderId: '订单编号',
        //   desc: '工单来源',
        //   datetime: '预约时间',
        //   expStatus: '订单状态',
        //   orderDescribe: '订单描述',
        //   coupleBack: '处理反馈',
        //   photo: '图片',
        // }, {
        //   subName: '所属服务',
        //   commitDate: '下单时间',
        //   subState: '服务状态',
        //   orderId: '订单编号',
        //   desc: '工单来源',
        //   datetime: '预约时间',
        //   expStatus: '订单状态',
        //   orderDescribe: '订单描述',
        //   coupleBack: '处理反馈',
        //   photo: '图片',
        // }]
        runInAction(() => {
          Toast.hide()
          this.orderList = res || []
        })
      } catch (e) {
        console.log(e, 'getOrderList')
        Toast.hide()
      }
    }

}
