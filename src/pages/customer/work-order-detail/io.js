import ioContext from '../../../common/io-context'

ioContext.create('workOrderDetail', {
  // 订单详情
  getWorkOrderDetail: {
    url: '/api/client/workOrderDetail',
    method: 'POST',
  },
})

export default ioContext.api.workOrderDetail
