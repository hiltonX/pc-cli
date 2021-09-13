import React from 'react'
import { observer } from 'mobx-react'

import Frame from '../../../frame'
import Info from '../../../component/info'

import MainStore from './store-main'

const store = new MainStore()

@observer
class WorkOrderDetail extends React.Component {

  render() {
    return (
      <Frame title="历史订单详情">
        <div className="page page-work-order-detail">
          <Info label="订单编号" value="A001"/>
          <Info className="mt12" label="所属服务" value="A001"/>
          <Info className="mt12" label="工单来源" value="A001"/>
          <Info className="mt12" label="下单时间" value="A001"/>
          <Info className="mt12" label="预约时间" value="A001"/>
          <Info className="mt12" label="订单状态" value="A001"/>
          <Info className="mt12" label="订单描述" value="A001"/>
          <Info className="mt12" label="处理反馈" value="A001"/>
          <Info className="mt12" label="图片" value="A001">
            <div>
              <img src="./123.jpg" alt="图片"/>
            </div>
            <div className="mt12">
              <img src="./123.jpg" alt="图片"/>
            </div>
          </Info>
        </div>
      </Frame>
    )
  }

}

export default WorkOrderDetail