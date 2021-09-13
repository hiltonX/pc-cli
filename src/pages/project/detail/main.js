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
      <Frame title="项目详情">
        <div className="page page-detail">
          <div>
            <Info label="公司姓名" value="张三" />
            <Info className="mt12" label="项目名称" value="张三" />
            <Info className="mt12" label="甲方主体" value="1111111313817381739817389718371897389173891273891273981738971893718927318973812738917389127" />
            <Info className="mt12" label="乙方主体" value="张sddadad三" />
            <Info className="mt12" label="业态" value="张asa三" />
            <Info className="mt12" label="区域" value="张asa三" />
            <Info className="mt12" label="项目地址" value="张asa三" />
          </div>
          <div className="mt92">
            <Info 
              value="合同名称" 
              icon="right"
              onClick={() => {
                this.props.history.push({
                  pathname: `/project/contract`
                })
              }}
            />
            <Info 
              className="mt12"
              value="合同名称合同名称合同名称合同名称合同名称合同名称合同名称合同名称合同名称合同名称合同名称合同名称合同名称合同名称合同名称合同名称合同名称合同名称合同名称合同名称合同名称合同名称合同名称" 
              icon="right"
              onClick={() => {
                this.props.history.push({
                  pathname: `/project/contract`
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