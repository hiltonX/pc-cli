import ioContext from '../../../common/io-context'

ioContext.create('projectContract', {
  // 获取合同详情
  getContractDetail: {
    url: '/api/project/order',
    method: 'POST',
  },
})

export default ioContext.api.projectContract
