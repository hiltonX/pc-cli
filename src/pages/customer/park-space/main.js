import React from 'react'
import { observer } from 'mobx-react'

import { urlToObject } from '../../../common/util'

import { List } from 'antd-mobile'
import Frame from '../../../frame'
import Info from '../../../component/info'

import MainStore from './store-main'

const Item = List.Item


const store = new MainStore()
@observer
class ParkSpace extends React.Component {

  componentDidMount() {
    const {search} = this.props.location
  
    const { perId } = urlToObject(search) || {}
    store.perId = perId

    store.getParkSpaceList()
  }

  render() {
    return (
      <Frame title="车位信息">
        <div className="page page-park-space">
          <List>
            {
              store.parkSpaceList.map(item => {
                return (<Item>
                  <Info label="车位号" value={item.carportNumber}/>
                </Item>)
              })
            }
          </List>
        </div>
      </Frame>
    )
  }

}

export default ParkSpace