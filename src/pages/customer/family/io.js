import ioContext from '../../../common/io-context'

ioContext.create('customerFamily', {
  // 获取车辆信息
  getFamilyList: {
    url: '/api/client/familymember',
    method: 'POST',
  },
})

export default ioContext.api.customerFamily
