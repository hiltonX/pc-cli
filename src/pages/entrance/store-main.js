import { makeAutoObservable, runInAction } from 'mobx'
import { Toast } from 'antd-mobile'
import io from './io'

export default class mainStore {

  // token
  token = undefined 

  
  constructor() {
    makeAutoObservable(this)
  }
 /**
    * @Author 不悔
    * @Date 2021-09-26
    * @desrc 获取登录账号
    * @export
    * @param {*}
    * 
  */
  getAccount = async () => {

    Toast.loading('loading', 10000, () => {}, true)
    try {
      // const res = await io.getAccount({
      //   token: this.token,
      //   NWVersion: '版本号',
      //   NWCode: '业务代码',
      //   NWGUID: '2010072115220907818261',
      // })

      const res = {
        "compName": "公司名称",
        "projectName": "项目名称",
        "firstParty": "甲方主体",
        "secondParty": "乙方主体",
        "commercialActivities": "业态",
        "area": "区域",
        "projectAddress": "项目地址",
        "contractList": [{
          "contractName": "合同名称",
          "contractId": "合同ID"
        }],
        
      }

      runInAction(() => {
        Toast.hide()
      })
    } catch (e) {
      console.log(e, 'getAccount')
      Toast.hide()
    }
  }

}
