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
          {store.parkSpaceList.length === 0 ? <Empty /> : <List>
            {
              store.parkSpaceList.map(item => {
                const {carportMumber} = item
                const text = carportMumber.indexOf('车位->') ? carportMumber.split('车位->')[1] : carportMumber
                
                return (<Item>
                  <Info label="车位号" value={text}/>
                </Item>)
              })
            }
          </List>}

        </div>
      </Frame>
    )
  }

}

export default ParkSpace