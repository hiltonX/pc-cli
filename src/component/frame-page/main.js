import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

import MyTable from '../../component/table'
import FrameSearch from '../../component/frame-search'


@observer
class FramePage extends Component {
  constructor(props) {
    super(props)

    this.framePageRef = React.createRef()

  }
  componentDidMount() {
    this.tableRef.store.getList()
  }

  render() {
    const {frameSearch, FrameTable} = this.props

    return (
      <div 
        className='frame-page'
        ref={this.framePageRef}
      >
        {frameSearch && <FrameSearch 
          style={{marginBottom: '20px'}}
          getList = {(form) => {
            const params = form.getFieldsValue()
            this.tableRef.store.getList(params)
          }}
          {...frameSearch}/>
        }
        <div className='oprate' style={{marginBottom: '20px'}}>
          {this.props.children}
        </div>
        {FrameTable && <MyTable ref={(ref) => this.tableRef = ref} {...FrameTable}/>}
      </div>
    )
  }
}

export default FramePage
