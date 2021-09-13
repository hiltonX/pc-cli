import React from 'react'
import { observer } from 'mobx-react'

import Frame from '../../../frame'
import Info from '../../../component/info'

import MainStore from './store-main'

const store = new MainStore()
@observer
class Detail extends React.Component {

  render() {
    return (
      <Frame title="客户详情">
        <div className="page-detail mt52 pl24 pr24">
          <div>
            <Info label="客户姓名" value="张三" />
            <Info className="mt12" label="客户姓名" value="张三" />
            <Info className="mt12" label="客户姓名" value="1111111313817381739817389718371897389173891273891273981738971893718927318973812738917389127" />
            <Info className="mt12" label="客户姓名" value="张sddadad三" />
            <Info className="mt12" label="客户姓名" value="张asa三" />
          </div>
          <div className="mt92">
            <Info 
              className="mt12"
              label="车位数量（个）" 
              value="张asa三" 
              icon="right"
              onClick={() => {
                this.props.history.push({
                  pathname: `/customer/park-space`
                })
              }}
            />
            <Info 
              className="mt12"
              label="车辆数量（个）" 
              value="张asa三" 
              icon="right"
              onClick={() => {
                this.props.history.push({
                  pathname: `/customer/car`
                })
              }}
            />
            <Info 
              className="mt12"
              label="家庭成员个数（人）" 
              value="张asa三" 
              icon="right"
            />
            <Info 
              className="mt12"
              label="历史工单（个）（近一年）" 
              value="张asa三" 
              icon="right"
            />
            <Info 
              className="mt12"
              label="历史订单（个）（近一年）" 
              value="张asa三" 
              icon="right"
              onClick={() => {
                this.props.history.push({
                  pathname: `/customer/order`
                })
              }}
            />

          </div>
        </div>
      </Frame>
    )
  }

}

export default Detail