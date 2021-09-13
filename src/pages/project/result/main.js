import React from 'react'
import { observer } from 'mobx-react'

import { List } from 'antd-mobile'
import Frame from '../../../frame'
import Info from '../../../component/info'

import MainStore from './store-main'

const Item = List.Item
const store = new MainStore()
@observer
class Result extends React.Component {

  render() {
    return (
      <Frame title="项目查询结果">
        <div className="page page-result mt52">
          <List>
            <Item
              arrow="horizontal"
              onClick={() => {
                this.props.history.push({
                  pathname: `/project/detail`
                })
              }}
            >
              <div>******公司</div>
              <div className="mt12">杭州翡翠城</div>
              <Info className="mt12" label="甲方主体" value="*****************" />
              <Info className="mt12" label="乙方主体" value="*****************" />
            </Item>
            <Item
              arrow="horizontal"
              onClick={() => {
                this.props.history.push({
                  pathname: `/project/detail`
                })
              }}
            >
              <div>******公司</div>
              <div className="mt12">杭州翡翠城</div>
              <Info className="mt12" label="甲方主体" value="*****************" />
              <Info className="mt12" label="乙方主体" value="*****************" />
            </Item>
          </List>
        </div>
      </Frame>
    )
  }

}

export default Result