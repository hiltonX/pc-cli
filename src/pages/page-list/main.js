import React from 'react'
import { observer } from 'mobx-react'

import Frame from '../../frame'
import MyTable from '../../component/table'
import FrameSearch from '../../component/frame-search'
import MainStore from './store-main'

const store = new MainStore()
   
@observer
class Example extends React.Component {

  componentDidMount() {
    this.tableRef.store.getList()
  }

  render() {
    return (
      <Frame
        title="标题"
      >
        <div className="page">
          <FrameSearch 
            filterList={[{
              type: 'text',
              label: '例子',
              name: 'demo',
            }]}
            getList={(form) => {
              const filterParams = form.getFieldsValue()
              this.tableRef.store.getList(filterParams)
            }}
          />
          <MyTable 
            ref={(ref) => this.tableRef = ref}
            url='https://www.fastmock.site/mock/2273358dd92aa30091921dab8ec2ee1d/getList/getList'
            columns={[{
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
            }, {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
              render: text => <a>{text}</a>,
            }]} 
          /> 
        </div>
      </Frame>
    )
  }
}

export default Example