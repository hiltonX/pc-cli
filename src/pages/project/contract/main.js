import React from 'react'
import { observer } from 'mobx-react'

import Frame from '../../../frame'
import Info from '../../../component/info'

import { urlToObject } from '../../../common/util'

import MainStore from './store-main'

const store = new MainStore()
@observer
class Contract extends React.Component {

  componentDidMount() {
    const {search} = this.props.location

    const {contractId} = urlToObject(search) || {}

    store.contractId = contractId
    store.getContractDetail()
  }

  render() {
    const {
      contractName,
      date,
      area,
      introduceCost,
      transactionCost,
      subsidyCost,
      propertyStandards,
    } = store.contractDetail
    return (
      <Frame title="合同详情">
        <div className="page page-contract">
          <div>{contractName}</div>
          <Info className="mt12" label="合同签约面积（㎡）" value={area} />
          <Info className="mt12" label="签约日期" value={date} />
          <Info className="mt12" label="前介价（元）" value={introduceCost} />
          <div className="pl52">
            <Info className="mt12" label="2020-01-01" value="2222" />
            <Info className="mt12" label="2020-01-01" value="2222" />
          </div>
          <Info className="mt12" label="开办费（元）" value={transactionCost} />
          <div className="pl52">
            <Info className="mt12" label="2020-01-01" value="2222" />
            <Info className="mt12" label="2020-01-01" value="2222" />
          </div>
          <Info className="mt12" label="补贴费（元）" value={subsidyCost} />
          <Info className="mt12" label="物业费标准（元/平米·月）" value={propertyStandards} />
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