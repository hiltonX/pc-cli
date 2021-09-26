import { makeAutoObservable, runInAction } from 'mobx'
import { Toast } from 'antd-mobile'
import io from './io'

export default class mainStore {

    // 合同id
    contractId = undefined 
    // 合同详情
    contractDetail = {}
  
    
    constructor() {
      makeAutoObservable(this)
    }
  
    /**
      * @Author 不悔
      * @Date 2021-09-26
      * @desrc 获取合同详情
      * @export
      * @param {*}
      * 
    */
    getContractDetail = async () => {
      Toast.loading('loading', 10000, () => {}, true)
      try {
        const res = await io.getContractDetail({
          contractId: this.contractId,
        })
        // const res = {
        //   "contract_name": "合同名称",
        //   "area": "合同签约面积",
        //   "date": "签约日期",
        //   "introduceCost": "前介费",
        //   "transactionCost": "开办费",
        //   "subsidyCost": "补贴费",
        //   "propertyStandards": "物业标准"
        // }
        runInAction(() => {
          Toast.hide()
          this.contractDetail= res || {}
        })
      } catch (e) {
        console.log(e, 'getOrderList')
        Toast.hide()
      }
    }

}
