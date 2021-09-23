import ioContext from '../../../common/io-context'

ioContext.create('customerWorkOrder', {
  // 获取工单信息
  getWorkOrderList: {
    url: '/api/client/workorder',
    method: 'POST',
  },
})

export default ioContext.api.customerWorkOrder
