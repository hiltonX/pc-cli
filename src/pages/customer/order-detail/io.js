import ioContext from '../../../common/io-context'

ioContext.create('customerOrderDetail', {
  // 获取订单详情
  getOrderDetail: {
    url: '/api/client/oederdetail',
    method: 'POST',
  },
})

export default ioContext.api.customerOrderDetail
