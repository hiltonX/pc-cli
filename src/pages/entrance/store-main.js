import { makeAutoObservable, runInAction } from 'mobx'
import { Toast } from 'antd-mobile'
import io from './io'
import { watermark } from '../../common/util'

export default class mainStore {

  // token
  token = undefined 
  // loading
  loading = true
  // 错误提示
  errorMsg = undefined


  
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
    this.loading = true

    Toast.loading('loading', 10000, () => {}, true)
    try {
      const res = await io.getAccount({
        token: this.token,
        NWVersion: '01',
        NWCode: 'SYS_validateToken',
        NWGUID: '2010072115220907818261',
      })

      // const res = {
      //   "compName": "公司名称",
      //   "projectName": "项目名称",
      //   "firstParty": "甲方主体",
      //   "secondParty": "乙方主体",
      //   "commercialActivities": "业态",
      //   "area": "区域",
      //   "projectAddress": "项目地址",
      //   "contractList": [{
      //     "contractName": "合同名称",
      //     "contractId": "合同ID"
      //   }],
        
      // }

      runInAction(() => {
        Toast.hide()
        this.loading = false

        const {NWRespCode, NWErrMsg, Record={username:"test"}} = res

        if (NWRespCode === '100') {
          this.errorMsg = NWErrMsg
        } else {
          // 存储username，用来打水印
          localStorage.setItem('username', Record.username)
  
        }

      })
    } catch (e) {
      console.log(e, 'getAccount')
      this.loading = false
      Toast.hide()
    }
  }

}
