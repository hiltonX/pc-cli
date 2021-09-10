import React from 'react'
import { observer } from 'mobx-react'

import { List } from 'antd-mobile'
import Frame from '../../../frame'

import MainStore from './store-main'

const Item = List.Item
const store = new MainStore()
@observer
class Result extends React.Component {

  render() {
    return (
      <Frame title="客户查询结果">
        <div className="page-result mt52">
          <List>
            <Item
              arrow="horizontal"
              multipleLine
              onClick={() => {
                this.props.history.push({
                  pathname: `/customer/detail`
                })
              }}
              platform="android"
              className="pr4"
            >
              <div className="pl24">
                <div className="FBH JCSB">
                  <div>大姐姐</div>
                  <div>13634149497</div>
                </div>
                <div className="mt12">武林壹号</div>
              </div>
            </Item>
          </List>
        </div>
      </Frame>
    )
  }

}

export default Result