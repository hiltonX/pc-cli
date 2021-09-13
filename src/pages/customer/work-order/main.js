import React from 'react'
import { observer } from 'mobx-react'

import { SegmentedControl, WingBlank, List } from 'antd-mobile'
import Frame from '../../../frame'
import Info from '../../../component/info'

import MainStore from './store-main'

const Item = List.Item


const store = new MainStore()
@observer
class WorkOrder extends React.Component {

  render() {
    return (
      <Frame title="历史工单">
        <div className="page page-work-order">
          <WingBlank size="lg" className="sc-example">
            <SegmentedControl values={['全部', '投诉', '表扬', '报事']} />
          </WingBlank>
          <List className="mt4" >
            <Item
              arrow="horizontal"
              onClick={() => {
                this.props.history.push({
                  pathname: `/customer/work-order-detail`
                })
              }}
            >
              <Info label="所属服务" value="A001"/>
              <Info className="mt12" label="提交日期" value="A001"/>
              <Info className="mt12" label="服务状态" value="A001"/>
              <Info className="mt12" label="订单编号" value="A001"/>
              <Info className="mt12" label="工单来源" value="A001"/>
            </Item>
            <Item
              arrow="horizontal"
              onClick={() => {
                this.props.history.push({
                  pathname: `/customer/work-order-detail`
                })
              }}
            >
              <Info label="所属服务" value="A001"/>
              <Info className="mt12" label="提交日期" value="A001"/>
              <Info className="mt12" label="服务状态" value="A001"/>
              <Info className="mt12" label="订单编号" value="A001"/>
              <Info className="mt12" label="工单来源" value="A001"/>
            </Item>

          </List>
        </div>
      </Frame>
    )
  }

}

export default WorkOrder