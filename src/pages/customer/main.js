import React from 'react'

import { List, InputItem, Picker, Button } from 'antd-mobile'
import { createForm } from 'rc-form'

import Frame from '../../frame'


class Customer extends React.Component {

  render() {
    const { getFieldProps } = this.props.form
    return (
      <Frame title="客户查询">
        <div className="page-customer mt52 pl24 pr24">
          <List>
            <InputItem
              {...getFieldProps('autofocus')}
              clear
              placeholder="请输入客户姓名"
              ref={el => this.autoFocusInst = el}
            >
              客户姓名
            </InputItem>
            <InputItem
              {...getFieldProps('focus')}
              clear
              placeholder="请输入客户手机号"
              ref={el => this.inputRef = el}
            >
              客户手机号
            </InputItem>
            <Picker 
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
            >
              <List.Item arrow="horizontal">所属公司</List.Item>
            </Picker>
          </List>
          <Button type="primary" className="mt52">
            查询
          </Button>
        </div>
      </Frame>
    )
  }

}

const SearchForm = createForm()(Customer)
export default SearchForm