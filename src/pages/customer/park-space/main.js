import React from 'react'
import { observer } from 'mobx-react'

import { List } from 'antd-mobile'
import Frame from '../../../frame'
import Info from '../../../component/info'

import MainStore from './store-main'

const Item = List.Item


const store = new MainStore()
@observer
class ParkSpace extends React.Component {

  render() {
    return (
      <Frame title="车位信息">
        <div className="page page-park-space">
          <List>
            <Item
              multipleLine
              onClick={() => {
                this.props.history.push({
                  pathname: `/customer/detail`
                })
              }}
              platform="android"
              className="pr4"
            >
              <Info label="车位号" value="A001"/>
            </Item>
            <Item
              multipleLine
              onClick={() => {
                this.props.history.push({
                  pathname: `/customer/detail`
                })
              }}
              platform="android"
              className="pr4"
            >
              <Info label="车位号" value="A002"/>
            </Item>

          </List>
        </div>
      </Frame>
    )
  }

}

export default ParkSpace