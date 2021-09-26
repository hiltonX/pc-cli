import ioContext from '../../common/io-context'

ioContext.create('entrance', {
  // 获取帐号信息
  getAccount: {
    url: '/ns-face-sys/service',
    method: 'GET',
  },
})

export default ioContext.api.entrance
