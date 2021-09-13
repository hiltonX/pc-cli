import React from 'react'
import { observer } from 'mobx-react'

import { List } from 'antd-mobile'
import Frame from '../../../frame'
import Info from '../../../component/info'

import MainStore from './store-main'

const Item = List.Item


const store = new MainStore()
@observer
class Car extends React.Component {

  render() {
    return (
      <Frame title="车位信息">
        <div className="page-park-space mt52 pl24 pr24">
          <List>
            <Item
              multipleLine
              className="pr4"
            >
              <Info label="车牌号" value="浙A12344"/>
              <Info className="mt12" label="车辆品牌及型号" value="宝马"/>
              <Info className="mt12" label="车辆系列" value="三系"/>
            </Item>
            <Item
              multipleLine
              className="pr4"
            >
              <Info label="车牌号" value="浙A12344"/>
              <Info className="mt12" label="车辆品牌及型号" value="宝马"/>
              <Info className="mt12" label="车辆系列" value="三系"/>
            </Item>
          </List>
        </div>
      </Frame>
    )
  }

}

export default Car