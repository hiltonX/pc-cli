import { makeAutoObservable, runInAction } from 'mobx'
import { Toast } from 'antd-mobile'
import io from './io'

export default class mainStore {

  // 订单id
  orderId = undefined 
  // 订单详情
  orderDetail = {}
  
  constructor() {
    makeAutoObservable(this)
  }
 /**
    * @Author 不悔
    * @Date 2021-09-27
    * @desrc 获取订单详情
    * @export
    * @param {*}
    * 
  */
  getOrderDetail = async () => {
    Toast.loading('loading', 10000, () => {}, true)

    try {
      // const res = await io.getOrderDetail({
      //   orderId: this.orderId
      // })
      const res = [{
        "integrationName": "所属商家",
        "expStatus": "订单状态",
        "itemPic": "商品主图",
        "key": "itemName",
        "itemName": "商品名称",
        "sku": "SKU",
        "itemPrice": "商品单价售价",
        "itemNum": "商品数量",
        "orderMoney": "订单金额",
        "practiceMoney": "实际付款金额",
        "consigneeName": "收货人姓名",
        "consigneePhoneNumber": "收货人电话",
        "address": "收货地址",
        "logisticsMoney": "物流金额",
        "desc": "支付方式"
      }, {
        subName: '所属服务',
        commitDate: '下单时间',
        subState: '服务状态',
        orderId: '订单编号',
        desc: '工单来源',
        datetime: '预约时间',
        expStatus: '订单状态',
        orderDescribe: '订单描述',
        coupleBack: '处理反馈',
        photo: '图片',
      }]
      runInAction(() => {
        Toast.hide()
        this.orderDetail = res[0] || {}
      })
    } catch (e) {
      console.log(e, 'getOrderDetail')
      Toast.hide()
    }
  }

}
