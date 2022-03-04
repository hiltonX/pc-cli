import React, {Component} from 'react'
import { observer } from 'mobx-react'

import {Table} from 'antd'
import MainStore from './store-main'
@observer
class MyTable extends Component {
  constructor(props) {
    super(props)

    const {url} = this.props
    this.store = new MainStore(url)

    this.tableRef = React.createRef()
  }

  render() {
    const {url, ...rest} = this.props

    return (
      <div className="table">
        <Table 
          ref={this.tableRef}
          loading={this.store.tableLoading} 
          dataSource={this.store.list}
          pagination={{
            ...this.store.pagination,
            showQuickJumper: true,
            showSizeChanger: true,
            showTotal: (total) => `共${total}条`
          }}
          onChange={this.store.handleTableChange}
          {...rest}
        />
      </div>
    )
  }
}


export default MyTable
