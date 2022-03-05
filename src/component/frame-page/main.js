import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

import MyTable from '../../component/table'
import FrameSearch from '../../component/frame-search'


@observer
class FramePage extends Component {

  componentDidMount() {
    console.log(this.tableRef)
    this.tableRef.store.getList()
  }

  render() {
    const {frameSearch, FrameTable} = this.props
    return (
      <div className='frame-page'>
        {frameSearch && <FrameSearch 
          getList = {(form) => {
            const params = form.getFieldsValue()
            this.tableRef.store.getList(params)
          }}
          {...frameSearch}/>
        }
        <div className='oprate'>
          {this.props.children}
        </div>
        {FrameTable && <MyTable ref={(ref) => this.tableRef = ref} {...FrameTable}/>}
      </div>
    )
  }
}

export default FramePage
