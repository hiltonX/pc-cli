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
                      pathname: `/project/result`
                    })
                    console.log(values, 'values....')
                  } else {
                    Toast.info('请输入公司名称', 2)
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