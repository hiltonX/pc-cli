import { makeAutoObservable, runInAction } from 'mobx'
import { Toast } from 'antd-mobile'
import io from './io'
export default class mainStore {
  // 当前页码
  current = 1
  // 搜索列表的入参
  filterParams = undefined 
  // 列表
  list = []
  // dataSource
  dataSource = undefined
  // loading
  loading = false
  
  constructor() {
    makeAutoObservable(this)
  }
 /**
    * @Author 不悔
    * @Date 2021-09-24
    * @desrc 搜索列表的入参
    * @export
    * @param *
    * 
  */
  getList = async () => {

    Toast.loading('loading', 10000, () => {}, true)
    this.loading = true
    try {
      const res = await io.getList({
        ...this.filterParams,
        pageSize: 10,
        pageNum: this.current
      })

      // let res = {
      //   content: [{
      //     "compName": "公司名称",
      //     "projectName": "项目名称",
      //     "firstParty": "甲方主体",
      //     "second_party": "乙方主体",
      //     "commercialActivities": "业态",
      //     "area": "区域",
      //     "projectAddress": "项目地址",
      //     "contractList": "合同列表",
      //     "contractName": "合同名称",
      //     "contractId": "合同ID"
      //   }]
      // }

      runInAction(() => {
        const {content=[]} = res
        this.list = content
        this.loading = false

        Toast.hide()
      })
    } catch (e) {
      console.log(e, 'getList')
      Toast.hide()
      this.loading = false
    }
  }

}
