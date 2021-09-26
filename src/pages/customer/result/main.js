import React from 'react'
import { observer } from 'mobx-react'

import { List, ListView } from 'antd-mobile'

import { urlToObject } from '../../../common/util'

import Frame from '../../../frame'
import Empty from '../../../component/empty'

import MainStore from './store-main'

const Item = List.Item
const store = new MainStore()
@observer
class Result extends React.Component {
  constructor(props) {
    super(props)

    store.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
  }
  componentDidMount() {
    const {search} = this.props.location
 
    store.filterParams = urlToObject(search)
    store.getList()
  }


  render() {

    const isEmpty = store.current === 1 && store.list.length === 0 

    return (
      <Frame title="客户查询结果">
        <div className="page page-result">
          {isEmpty && !store.loading ? <Empty /> : <ListView
            dataSource={store.dataSource.cloneWithRows(store.list)}
            renderRow={(rowData, sectionID, rowID) => {
              return (<Item
                arrow="horizontal"
                onClick={() => {
                  this.props.history.push(`/customer/detail?perId=${rowData.perId}`)
                }}
                className="pr4"
                key={rowData.perId}
              >
                <div className="pl24">
                  <div className="FBH JCSB">
                    <div>{rowData.perName}</div>
                    <div>{rowData.userPhone}</div>
                  </div>
                  <div className="mt12">{rowData.projectName}</div>
                </div>
              </Item>)
            }}
            initialListSize={10}
            pageSize={10}
            useBodyScroll={true}
            // pullToRefresh={<PullToRefresh
            //   refreshing={store.loading}
            //   onRefresh={() => {
            //     store.getList()
            //   }}
            // />}
            onEndReached={() => {
              //当前页小于总页数继续请求下一页数据，否则停止请求数据
              if (store.list.length >= 10) {
                store.current += 1
                store.getList()
              }
            }}
            renderFooter={() => (<div>{store.loading ? '加载中' : ''}</div>)}
            onEndReachedThreshold={30}
          />}
        </div>
      </Frame>
    )
  }

}

export default Result