import ioContext from '../../../common/io-context'

ioContext.create('customerParkSpace', {
  // 获取车位信息
  getParkSpaceList: {
    url: '/api/client/carport',
    method: 'POST',
  },
})

export default ioContext.api.customerParkSpace
