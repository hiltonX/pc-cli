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
  
    const { projectId } = urlToObject(search) || {}
    store.projectId = projectId
    store.getProjectDetail()
  }

  render() {
    const {
      compName,
      projectName,
      firstParty,
      secondParty,
      commercialActivities,
      area,
      projectAddress,
      contractList=[]
    } = store.projectDetail
    return (
      <Frame title="项目详情">
        <div className="page page-detail">
          <div>
            <Info label="公司姓名" value={compName} />
            <Info className="mt12" label="项目名称" value={projectName} />
            <Info className="mt12" label="甲方主体" value={firstParty} />
            <Info className="mt12" label="乙方主体" value={secondParty} />
            <Info className="mt12" label="业态" value={commercialActivities} />
            <Info className="mt12" label="区域" value={area} />
            <Info className="mt12" label="项目地址" value={projectAddress} />
          </div>
          <div className="mt92">
            {contractList.map(item => {
              return (<Info 
                value={item.contractName}
                icon="right"
                onClick={() => {
                  this.props.history.push(`/project/contract?contractId=${item.contractId}`)
                }}
              />)
            })}
          </div>
        </div>
      </Frame>
    )
  }

}

export default Detail