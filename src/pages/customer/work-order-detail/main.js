import React from 'react'
import { observer } from 'mobx-react'

import Frame from '../../../frame'
import Info from '../../../component/info'

import { urlToObject } from '../../../common/util'

import MainStore from './store-main'

const store = new MainStore()

@observer
class WorkOrderDetail extends React.Component {

  componentDidMount(props) {
    const {search} = this.props.location
  
    const { orderId } = urlToObject(search) || {}
    store.orderId = orderId

    store.getWorkOrderDetail()
  }


  render() {
    const {
      orderId,
      subName,
      desc,
      commitDate,
      datetime,
      expStatus,
      orderDescribe,
      coupleBack,
      photo,
    } = store.workOrderDetail

    return (
      <Frame title="历史工单详情">
        <div className="page page-work-order-detail">
          <Info label="订单编号" value={orderId}/>
          <Info className="mt12" label="所属服务" value={subName}/>
          <Info className="mt12" label="工单来源" value={desc}/>
          <Info className="mt12" label="下单时间" value={commitDate}/>
          <Info className="mt12" label="预约时间" value={datetime}/>
          <Info className="mt12" label="订单状态" value={expStatus}/>
          <Info className="mt12" label="订单描述" value={orderDescribe}/>
          <Info className="mt12" label="处理反馈" value={coupleBack}/>
          <Info className="mt12" label="图片">
            <div>
              <img src={photo} alt="图片"/>
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