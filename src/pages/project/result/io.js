import ioContext from '../../../common/io-context'

ioContext.create('projectResult', {
  // 获取项目列表
  getList: {
    url: '/api/project/project',
    method: 'POST',
  },
})

export default ioContext.api.projectResult
