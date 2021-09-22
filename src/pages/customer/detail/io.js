import ioContext from '../../../common/io-context'

ioContext.create('customerDetail', {
  // 获取客户详情
  getDetail: {
    url: '/api/client/clientdetail',
    method: 'POST',
  },
})

export default ioContext.api.customerDetail
