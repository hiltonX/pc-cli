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

    if(this.token === undefined) {
      this.errorMsg = '缺少token，请联系系统OA管理员'
      this.loading = false
      Toast.hide()
      return 
    }
    try {
      const res = await io.getAccount({
        token: this.token
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
        console.log(res, 'res.......')
        const {Data={}} = res.Response
        const {NWRespCode, NWErrMsg, Record} = Data
        if (NWRespCode !== '100') {
          this.errorMsg = NWErrMsg
          localStorage.setItem('username', '')
        } else {
          // 存储username，用来打水印
          localStorage.setItem('username', Record.userName || '')
        }

      })
    } catch (e) {
      console.log(e, 'getAccount')
      this.loading = false
      Toast.hide()
      this.errorMsg = e.message
      localStorage.setItem('username', '')
    }
  }

}
