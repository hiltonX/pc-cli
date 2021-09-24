import React from 'react'
import { observer } from 'mobx-react'

import { urlToObject } from '../../../common/util'

import { List } from 'antd-mobile'
import Frame from '../../../frame'
import Info from '../../../component/info'
import Empty from '../../../component/empty'

import MainStore from './store-main'

const Item = List.Item


const store = new MainStore()
@observer
class Car extends React.Component {

  componentDidMount() {

    const {search} = this.props.location
  
    const { perId } = urlToObject(search) || {}
    store.perId = perId
    
    store.getCarList()
  }

  render() {
    return (
      <Frame title="车辆信息">
        <div className="page page-park-space">
          {store.carList.length <= 0 ? <Empty /> : <List>
            {store.carList.map(item => {
              return (<Item>
                <Info label="车牌号" value={item.vehicleMumber}/>
                <Info className="mt12" label="车辆品牌及型号" value={item.vehicleBrand}/>
                <Info className="mt12" label="车辆系列" value={item.vehicleSeries}/>
              </Item>)
            })}
          </List>}
        </div>
      </Frame>
    )
  }

}

export default Car