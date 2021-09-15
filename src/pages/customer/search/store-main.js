import { makeAutoObservable, runInAction } from 'mobx'
import { message } from 'antd'

export default class mainStore {

  // 客户姓名
  perName = undefined 

  
  constructor() {
    makeAutoObservable(this)
  }
 /**
    * @Author 不悔
    * @Date 2021-09-14
    * @desrc 获取客户列表
    * @export
    * @param {Number} current 当前页码
    * 
  */
  getList = async (current=1) => {

    // this.tableLoading = true
    // this.pagination.current = current

    try {
      // const res = await io.getLogList({
      //   ...this.filterParams,
      //   ...this.pagination,
      //   pageNum: current
      // })
      // runInAction(() => {
      //   this.tableLoading = false
      //   this.pagination.total = res.count || res.data.length

      //   this.logList = res.data
      // })
    } catch (e) {
      // console.log(e, 'getLogList')
      // message.error(e.message)
      // this.tableLoading = false
    }
  }

}
