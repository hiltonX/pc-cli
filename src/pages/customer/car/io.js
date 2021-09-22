import ioContext from '../../../common/io-context'

ioContext.create('customerCar', {
  // 获取车辆信息
  getCarList: {
    url: '/api/client/vehicle',
    method: 'POST',
  },
})

export default ioContext.api.customerCar
