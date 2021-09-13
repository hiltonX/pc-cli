import React from 'react'
import { observer } from 'mobx-react'

import { List, InputItem, Toast, Button } from 'antd-mobile'
import { createForm } from 'rc-form'

import Frame from '../../../frame'

import MainStore from './store-main'

const store = new MainStore()
@observer
class Search extends React.Component {

  render() {
    const { 
      getFieldProps, 
      getFieldError,
      setFieldsValue
    } = this.props.form
    return (
      <Frame title="客户查询">
        <div className="page page-customer">
          <List>
            <InputItem // 10个
              {...getFieldProps('perName')}
              clear
              placeholder="请输入客户姓名"
              onChange={(value, e) => {
                setFieldsValue({
                  perName: value.substring(0,10)
                })
              }}
            >
              客户姓名
            </InputItem>
            <InputItem
              {...getFieldProps('userPhone', {
                validateTrigger: 'onBlur',
                rules: [{
                  min: 11, message: '请输入正确手机号'
                }]
              })}
              type="phone"
              placeholder="请输入客户手机号"
              clear
              error={!!getFieldError('userPhone')}
              onErrorClick={() => {
                Toast.info(getFieldError('userPhone')[0] || '请输入正确手机号')
              }}
            >
              客户手机号
            </InputItem>
            <InputItem // 20个
              {...getFieldProps('compName')}
              placeholder="请输入所属公司"
              clear
              onChange={(value, e) => {
                setFieldsValue({
                  compName: value.substring(0,20)
                })
              }}
            >
              所属公司
            </InputItem>
          </List>
          <Button 
            type="primary" 
            className="mt52"
            loading={''}
            onClick={() => {
              this.props.form.validateFields((errors, values) => {
                if (!errors) {
                  const valueArr = Object.values(values)

                  const hasValue = valueArr.filter(item => item!== undefined && item!== '')
                  // 如果有搜索条件
                  if (hasValue.length) {
                    this.props.history.push({
                      pathname: `/customer/result`
                    })
                    console.log(values, 'values....')
                  } else {
                    Toast.info('请至少输入一项查询条件', 2)
                  }

                }
              })
            }}
          >
            查询
          </Button>
        </div>
      </Frame>
    )
  }

}

const SearchForm = createForm()(Search)
export default SearchForm