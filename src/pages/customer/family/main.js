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
class Family extends React.Component {

  componentDidMount() {
    const {search} = this.props.location
  
    const { perId } = urlToObject(search) || {}
    store.perId = perId

    store.getFamilyList()
  }

  render() {
    return (
      <Frame title="家庭成员">
        <div className="page page-family">
          {store.familyList.length <= 0 ? <Empty /> : <List>
            {store.familyList.map(item => {
              return (<Item key={item.perId}>
                <Info label="姓名" value={item.perName}/>
                <Info className="mt12" label="称呼" value={item.relationship}/>
                <Info className="mt12" label="性别" value={item.sex}/>
                <Info className="mt12" label="出生日期" value={item.birthdate}/>
                <Info className="mt12" label="工作单位" value={item.compName}/>
              </Item>)
            })}
          </List>}
        </div>
      </Frame>
    )
  }

}

export default Family