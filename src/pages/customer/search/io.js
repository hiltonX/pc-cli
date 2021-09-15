import ioContext from '../../../common/io-context'

ioContext.create('customerSearch', {
  // 获取客户列表
  getList: {
    url: '',
    method: 'POST',
  },
})

export default ioContext.api.customerSearch
