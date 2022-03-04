import moment from 'moment'
import { makeAutoObservable, runInAction } from 'mobx'
import { message } from 'antd'
import ioContext from '../../common/io-context'

export default class mainStore {
  // 表格loading状态 
  tableLoading = false
  // 分页参数
  pagination = {
    current: 1,
    pageSize: 2,
    total: 0
  }
  // 搜索参数
  filterParams = {}
  // 列表
  list = []

  constructor(url) {
    this.url = url

    makeAutoObservable(this)

    ioContext.create('list', {
      getList: {
        url: this.url,
        method: 'GET',
      }
    })

  }

  /**
    * @Author 不悔
    * @Date 2021-10-14
    * @desrc 获取用户列表
    * @export
    * @param {Number} current 当前页面
    * 
  */
  getList = async (params = {}) => {
    const { current=1, ...rest } = params
    this.tableLoading = true
    this.pagination.current = current
    this.filterParams = rest

    try {
      const res = await ioContext.api.list.getList({
        ...this.filterParams,
        ...this.pagination,
        pageNum: current
      })
      runInAction(() => {
        const {data=[], totalCount} = res
        this.pagination.total = totalCount
        this.list = data || []
        this.tableLoading = false
      })
    } catch (e) {
      console.log('getList')
      message.error(e.message)
      this.tableLoading = false
      this.list = []
    }
  }


   /**
    * @Author 不悔
    * @Date 2021-03-24
    * @desrc 修改页码
    * @export
    * @param {Object} pagination 分页参数
  */
  handleTableChange = (pagination) => {
    if (pagination.pageSize === this.pagination.pageSize) {
      this.pagination.current = pagination.current
    } else {
      this.pagination.current = 1
      this.pagination.pageSize = pagination.pageSize
    }

    this.getList({
      current: this.pagination.current,
      ...this.filterParams
    })
  }

}
