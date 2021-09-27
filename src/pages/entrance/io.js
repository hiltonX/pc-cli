import ioContext from '../../common/io-context'

ioContext.create('entrance', {
  // 获取帐号信息
  getAccount: {
    url: '/api/project/verify',
    method: 'POST',
  },
})

export default ioContext.api.entrance
