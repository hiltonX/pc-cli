import { makeAutoObservable, runInAction } from 'mobx'
import { Toast } from 'antd-mobile'
import io from './io'

export default class mainStore {

  // 项目id
  projectId = undefined 
  // 项目详情
  projectDetail = {}
  
  constructor() {
    makeAutoObservable(this)
  }
 /**
    * @Author 不悔
    * @Date 2021-09-24
    * @desrc 项目详情
    * @export
    * @param {*}
    * 
  */
  getProjectDetail = async () => {

    Toast.loading('loading', 10000, () => {}, true)
    try {
      const res = await io.getProjectDetail({
        projectId: this.projectId
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
        this.projectDetail = res[0] || {}
      })
    } catch (e) {
      console.log(e, 'getProjectDetail')
      Toast.hide()
    }
  }

}
