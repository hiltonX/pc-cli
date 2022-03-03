

import ioContext from '../../common/io-context'

ioContext.create('example', {
  // 获取信息
  getInfo: {
    url: '/mock/616501d07745790181861171/api/getInfo',
    method: 'POST',
  },
})

export default ioContext.api.example
