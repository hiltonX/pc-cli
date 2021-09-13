import React from 'react'
import { observer } from 'mobx-react'

import { List } from 'antd-mobile'
import Frame from '../../../frame'
import Info from '../../../component/info'

import MainStore from './store-main'

const Item = List.Item


const store = new MainStore()

@observer
class Family extends React.Component {

  render() {
    return (
      <Frame title="家庭成员">
        <div className="page page-family">
          <List>
            <Item>
              <Info label="姓名" value="浙A12344"/>
              <Info className="mt12" label="称呼" value="宝马"/>
              <Info className="mt12" label="性别" value="三系"/>
              <Info className="mt12" label="出生日期" value="三系"/>
              <Info className="mt12" label="工作单位" value="三系"/>
            </Item>
            <Item>
              <Info label="姓名" value="浙A12344"/>
              <Info className="mt12" label="称呼" value="宝马"/>
              <Info className="mt12" label="性别" value="三系"/>
              <Info className="mt12" label="出生日期" value="三系"/>
              <Info className="mt12" label="工作单位" value="三系"/>
            </Item>
          </List>
        </div>
      </Frame>
    )
  }

}

export default Family