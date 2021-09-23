import React from 'react'
import { observer } from 'mobx-react'

import { urlToObject } from '../../../common/util'

import Frame from '../../../frame'
import Info from '../../../component/info'

import MainStore from './store-main'

const store = new MainStore()
@observer
class Detail extends React.Component {

  componentDidMount() {
    const {search} = this.props.location
  
    const { perId } = urlToObject(search) || {}
    store.perId = perId
    store.getDetail()
  }

  render() {
    const {
      perName, 
      userPhone,
      projectName,
      address,
      moveinDate,
      steward,
      compName,
      carportNumber,
      vehicleNumber,
      memberOfFamilyNumber,
      workNumber,
      orderNumber,
      perId
    } = store.perDetail
    return (
      <Frame title="客户详情">
        <div className="page page-detail">
          <div>
            <Info label="客户姓名" value="张三" />
            <Info className="mt12" label="客户姓名" value={perName} />
            <Info className="mt12" label="客户手机号" value={userPhone} />
            <Info className="mt12" label="居住项目" value={projectName} />
            <Info className="mt12" label="项目地址" value={address} />
            <Info className="mt12" label="入住时间" value={moveinDate} />
            <Info className="mt12" label="专属管家" value={steward} />
            <Info className="mt12" label="所属公司" value={compName} />
          </div>
          <div className="mt92">
            <Info 
              label="车位数量（个）" 
              value={carportNumber}
              icon="right"
              onClick={() => {
                this.props.history.push(`/customer/park-space?perId=${perId}`)
              }}
            />
            <Info 
              className="mt12"
              label="车辆数量（个）" 
              value={vehicleNumber}
              icon="right"
              onClick={() => {
                this.props.history.push(`/customer/car?perId=${perId}`)
              }}
            />
            <Info 
              className="mt12"
              label="家庭成员个数（人）" 
              value={memberOfFamilyNumber}
              icon="right"
              onClick={() => {
                this.props.history.push(`/customer/family?perId=${perId}`)
              }}
            />
            <Info 
              className="mt12"
              label="历史工单（个）（近一年）" 
              value={workNumber}
              icon="right"
              onClick={() => {
                this.props.history.push(`/customer/work-order?perId=${perId}`)
              }}
            />
            <Info 
              className="mt12"
              label="历史订单（个）（近一年）" 
              value={orderNumber}
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