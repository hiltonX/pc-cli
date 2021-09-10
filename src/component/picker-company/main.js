import React from 'react'

import { List, Picker } from 'antd-mobile'


export default class PickerCompany extends React.Component {

  render() {
    const {text} = this.props
    return (<Picker 
      clear
      data={[
        {
          label: '2013',
          value: '2013',
        },
        {
          label: '2014',
          value: '2014',
        },
      ]} 
      cols={1} 
      extra="请选择所属公司"
      value={'2013'}
    >
      <List.Item arrow="horizontal">所属公司</List.Item>
    </Picker>)
  }
}