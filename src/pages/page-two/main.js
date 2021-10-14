import React from 'react'
import { observer } from 'mobx-react'

import Frame from '../../frame'
import MainStore from './store-main'

const store = new MainStore()

@observer
class Example extends React.Component {

  componentDidMount() {
    store.getInfo()
  }

  render() {
    return (
      <Frame
        title="标题"
      >
        <div className="page">请求接口获取的返回值22222：{store.info}</div>
      </Frame>
    )
  }
}

export default Example