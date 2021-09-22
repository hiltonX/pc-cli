import ioContext from '../../../common/io-context'

ioContext.create('customerFamily', {
  // 获取车辆信息
  getFamilyList: {
    url: '/api/client/family',
    method: 'POST',
  },
})

export default ioContext.api.customerFamily
