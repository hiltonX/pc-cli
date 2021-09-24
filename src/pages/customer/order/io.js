import ioContext from '../../../common/io-context'

ioContext.create('customerOrder', {
  // 获取订单信息
  getOrderList: {
    url: '/api/client/order',
    method: 'POST',
  },
})

export default ioContext.api.customerOrder
