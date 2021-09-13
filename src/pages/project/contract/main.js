import React from 'react'
import { observer } from 'mobx-react'

import Frame from '../../../frame'
import Info from '../../../component/info'

import MainStore from './store-main'

const store = new MainStore()
@observer
class Contract extends React.Component {

  render() {
    return (
      <Frame title="合同详情">
        <div className="page page-contract">
          <div>合同名称合同名称</div>
          <Info className="mt12" label="合同签约面积（㎡）" value="张三" />
          <Info className="mt12" label="签约日期" value="张三" />
          <Info className="mt12" label="前介价（元）" value="张三" />
          <div className="pl52">
            <Info className="mt12" label="2020-01-01" value="2222" />
            <Info className="mt12" label="2020-01-01" value="2222" />
          </div>
          <Info className="mt12" label="开办费（元）" value="张三" />
          <div className="pl52">
            <Info className="mt12" label="2020-01-01" value="2222" />
            <Info className="mt12" label="2020-01-01" value="2222" />
          </div>
          <Info className="mt12" label="补贴费（元）" value="张三" />
          <Info className="mt12" label="物业费标准（元/平米·月）" value="张三" />
          <div className="pl52">
            <Info className="mt12" label="排屋" value="2222" />
            <Info className="mt12" label="小高层" value="2222" />
          </div>
        </div>
      </Frame>
    )
  }

}

export default Contract