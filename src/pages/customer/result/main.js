import React from 'react'
import { observer } from 'mobx-react'

import { List } from 'antd-mobile'
import { urlToObject } from '../../../common/util'

import Frame from '../../../frame'

import MainStore from './store-main'

const Item = List.Item
const store = new MainStore()
@observer
class Result extends React.Component {
  componentDidMount() {
    const {search} = this.props.location
  
    store.filterParams = urlToObject(search)
    store.getList()
  }

  render() {
    return (
      <Frame title="客户查询结果">
        <div className="page-result mt52">
          <List>
            {store.list.map(item => (
              <Item
                arrow="horizontal"
                onClick={() => {
                  this.props.history.push(`/customer/detail?perId=${item.perId}`)
                }}
                className="pr4"
                key={item.perId}
              >
                <div className="pl24">
                  <div className="FBH JCSB">
                    <div>{item.perName}</div>
                    <div>{item.userPhone}</div>
                  </div>
                  <div className="mt12">{item.projectName}</div>
                </div>
              </Item>
            ))}
          </List>
        </div>
      </Frame>
    )
  }

}

export default Result