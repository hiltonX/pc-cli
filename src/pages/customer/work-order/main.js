import React from 'react'
import { observer } from 'mobx-react'

import { urlToObject } from '../../../common/util'

import { SegmentedControl, WingBlank, List } from 'antd-mobile'
import Frame from '../../../frame'
import Info from '../../../component/info'

import MainStore from './store-main'
import { strictEqual } from 'assert'

const Item = List.Item


const store = new MainStore()
@observer
class WorkOrder extends React.Component {

  componentDidMount() {
    const {search} = this.props.location
  
    const { perId } = urlToObject(search) || {}
    store.perId = perId

    store.getWorkOrderList()
  }

  render() {
    return (
      <Frame title="历史工单">
        <div className="page page-work-order">
          <WingBlank size="lg" className="sc-example">
            <SegmentedControl values={['全部', '投诉', '表扬', '报事']} />
          </WingBlank>
          <List className="mt4">
            {store.workOrderList.map(item => {
              return (<Item
                arrow="horizontal"
                onClick={() => {
                  this.props.history.push({
                    pathname: `/customer/work-order-detail`
                  })
                }}
              >
                <Info label="所属服务" value={item.subName}/>
                <Info className="mt12" label="提交日期" value={item.commitDate}/>
                <Info className="mt12" label="服务状态" value={item.subState}/>
                <Info className="mt12" label="订单编号" value={item.orderId}/>
                <Info className="mt12" label="工单来源" value={item.desc}/>
              </Item>)
            })}
          </List>
        </div>
      </Frame>
    )
  }

}

export default WorkOrder