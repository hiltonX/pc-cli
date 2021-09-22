import ioContext from '../../../common/io-context'

ioContext.create('customerResult', {
  // 获取客户列表
  getList: {
    url: '/api/client/clientquery',
    method: 'POST',
  },
})

export default ioContext.api.customerResult
