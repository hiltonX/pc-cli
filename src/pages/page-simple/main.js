import React from 'react'
import { observer } from 'mobx-react'
import { Button } from 'antd'
import Frame from '../../frame'
import FramePage from '../../component/frame-page'
import MainStore from './store-main'
import { createModuleResolutionCache } from 'typescript'

const store = new MainStore()
   
@observer
class Simple extends React.Component {

  render() {
    return (
      <Frame
        title="标题"
      >
        <div className="page page-simple">
          <FramePage 
            ref={(ref) => {
              const {tableRef} = ref || {}
              this.tableRef = tableRef
            }}
            frameSearch={{
              filterList: [{
                type: 'text',
                label: '例子',
                name: 'demo',
              }, {
                type: 'text',
                label: '例子',
                name: 'demo2',
              }, {
                type: 'text',
                label: '例子',
                name: 'demo3',
              }, {
                type: 'text',
                label: '例子',
                name: 'demo4',
              }]}
            }
            FrameTable={{
              url: 'https://www.fastmock.site/mock/2273358dd92aa30091921dab8ec2ee1d/getList/getList',
              columns: [{
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
              }, {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                render: text => <a>{text}</a>,
              }]
            }}
          >
            <div>
              <Button
                onClick={() => {
                  alert('做好新增等操作，更新列表')
                  this.tableRef.store.getList()
                }}
              >
              按钮
            </Button>
            </div>
          </FramePage>
        </div>
      </Frame>
    )
  }
}

export default Simple