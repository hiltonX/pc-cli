import ioContext from '../../../common/io-context'

ioContext.create('projectDetail', {
  // 获取项目详情
  getProjectDetail: {
    url: '/api/project/detail',
    method: 'POST',
  },
})

export default ioContext.api.projectDetail
